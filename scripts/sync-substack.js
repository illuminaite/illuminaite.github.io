const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser();
const SUBSTACK_FEED = 'https://thelumens.substack.com/feed';
const BLOGS_DIR = path.join(__dirname, '../data/blogs');

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function stripHtml(html) {
  if (!html) return '';
  return decodeHtmlEntities(html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .trim());
}

function decodeHtmlEntities(text) {
  if (!text) return '';
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function extractExcerpt(content, maxLength = 160) {
  const text = stripHtml(content);
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function extractFirstImage(html) {
  if (!html) return null;
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/);
  return imgMatch ? imgMatch[1] : null;
}

async function syncSubstack() {
  const forceSync = process.argv.includes('--force');

  try {
    console.log('Fetching Substack feed from', SUBSTACK_FEED);
    const feed = await parser.parseURL(SUBSTACK_FEED);

    if (!feed.items || feed.items.length === 0) {
      console.log('No articles found in feed');
      return;
    }

    console.log(`Found ${feed.items.length} articles`);

    for (const item of feed.items) {
      const title = item.title || 'Untitled';
      const slug = slugify(title);
      const filePath = path.join(BLOGS_DIR, `${slug}.json`);

      // Skip if article already exists (avoid overwriting local edits) unless --force
      if (fs.existsSync(filePath) && !forceSync) {
        console.log(`⊘ ${title} (already exists)`);
        continue;
      }

      const content = decodeHtmlEntities(item.content || item.description || '');
      const excerpt = extractExcerpt(content);
      const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Extract and download image
      let imagePath = null;
      const imageUrl = extractFirstImage(content);
      if (imageUrl) {
        try {
          const imageDir = path.join(__dirname, '../public/images/blogs', slug);
          if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir, { recursive: true });
          }
          console.log(`  → Add cover image to: ${imageDir}`);
        } catch (err) {
          console.log(`  ⚠ Could not create image dir: ${err.message}`);
        }
      }

      const blog = {
        slug,
        title,
        author: 'The Lumens',
        date,
        tags: ['TheLumens'],
        image: imagePath,
        excerpt,
        external_url: item.link,
        content: `Originally published on [Substack](${item.link})\n\n${content}`
      };

      const isUpdate = fs.existsSync(filePath);
      fs.writeFileSync(filePath, JSON.stringify(blog, null, 2) + '\n');
      console.log(`✓ ${title}${isUpdate ? ' (updated)' : ''}`);
    }

    console.log('Sync complete!');
  } catch (error) {
    console.error('Error syncing Substack:', error.message);
    process.exit(1);
  }
}

syncSubstack();
