const fs = require('fs');
const path = require('path');

const inputPath = 'data/blogs/A Witness for Interpretability.md';
const outputPath = 'data/blogs/witness-for-interpretability.json';

try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Normalize line endings
    content = content.replace(/\r\n/g, '\n');

    // Remove leading '## ' prefix (if it's a specific formatting quirk of this file as requested)
    content = content.replace(/^##\s+/, '');

    // Unescape markdown-escaped punctuation
    content = content.replace(/\\([*#\[\]()!\-])/g, '$1');

    // Convert markdown headings to HTML
    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert markdown links to HTML anchors
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Remove Obsidian image tokens ![[...]]
    content = content.replace(/!\[\[.*?\]\]/g, '');

    // Trim trailing whitespace on each line and overall
    content = content.split('\n').map(line => line.trimRight()).join('\n').trim();

    const blogData = {
        slug: "witness-for-interpretability",
        title: "A Witness for Interpretability",
        author: "William Gao",
        image_credit: "Art by Elena Osipyan",
        date: "April 10, 2026",
        tags: ["AI", "Interpretability", "Probability"],
        image: "/images/blogs/icarus_draft1.png",
        excerpt: "Drawing on the myth of Icarus and the MMD-critic framework, this article argues that interpretability is essential to ethical AI and explains a model-agnostic method for identifying representative examples and outliers.",
        content: content
    };

    fs.writeFileSync(outputPath, JSON.stringify(blogData, null, 2) + '\n');
    console.log('Successfully wrote ' + outputPath);

    const lines = fs.readFileSync(outputPath, 'utf8').split('\n').slice(0, 25).join('\n');
    console.log('First 25 lines of ' + outputPath + ':');
    console.log(lines);

} catch (err) {
    console.error('Error processing blog:', err);
    process.exit(1);
}
