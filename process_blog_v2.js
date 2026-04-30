const fs = require('fs');
const path = require('path');

const inputPath = 'data/blogs/A Witness for Interpretability.md';
const outputPath = 'data/blogs/witness-for-interpretability.json';

try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Normalize line endings
    content = content.replace(/\r\n/g, '\n');

    // Remove leading '## ' only when it is the outer wrapper prefix at the very beginning of the file
    // Actually the instruction says "remove leading '## ' only when it is the outer wrapper prefix at line start"
    // Usually this means if a line starts with '## ', remove those characters.
    // However, if it's "outer wrapper", it might mean just the first line if it's a title.
    // Let's stick to the instruction: "remove leading '## ' only when it is the outer wrapper prefix at line start"
    // I will interpret this as removing it if it's the very first thing in the file.
    content = content.replace(/^##\s+/, '');

    // Unescape markdown-escaped punctuation characters (\* \# \[ \] \( \) \! \- \_ \\)
    content = content.replace(/\\([*#\[\]()!\\_-])/g, '$1');

    // Remove Obsidian image tokens of the form ![[...]]
    content = content.replace(/!\[\[.*?\]\]/g, '');

    // Trim trailing whitespace on each line
    content = content.split('\n').map(line => line.trimRight()).join('\n');

    // Collapse 3+ consecutive blank lines to 2
    content = content.replace(/\n{4,}/g, '\n\n\n'); 
    // Wait, "collapse 3+ consecutive blank lines to 2". 
    // 3 blank lines is 4 newlines. 2 blank lines is 3 newlines.
    content = content.replace(/\n{4,}/g, '\n\n\n');

    // Trim whole content
    content = content.trim();

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

    // Print first 35 lines
    const outputLines = fs.readFileSync(outputPath, 'utf8').split('\n');
    console.log('--- First 35 lines ---');
    console.log(outputLines.slice(0, 35).join('\n'));
    console.log('--- Grep for "content" ---');
    // We can just find it in the array
    const contentLineIdx = outputLines.findIndex(l => l.includes('"content"'));
    if (contentLineIdx !== -1) {
        console.log(outputLines.slice(Math.max(0, contentLineIdx - 1), contentLineIdx + 2).join('\n'));
    }

} catch (err) {
    console.error('Error processing blog:', err);
    process.exit(1);
}
