const fs = require('fs');
const path = 'src/questions.js';

try {
    const content = fs.readFileSync(path, 'utf8');
    // split by \r\n or \n to handle EOL correctly
    const lines = content.split(/\r?\n/);

    console.log(`Total lines: ${lines.length}`);

    // Target:
    // Keep 1-843 (indices 0-842)
    // Drop 844-923 (indices 843-922)
    // Keep 924-End (indices 923-End)
    
    // Verification
    // Line 843 (index 842) should be "  modulo3: ["
    // Line 924 (index 923) should be "    {" (Start of ID 101)

    const line843 = lines[842];
    const line924 = lines[923];

    console.log(`Line 843 (Index 842): "${line843}"`);
    console.log(`Line 924 (Index 923): "${line924}"`);

    if (line843.trim() === 'modulo3: [' && line924.trim() === '{') {
        const part1 = lines.slice(0, 843);
        const part2 = lines.slice(923);
        
        const newLines = part1.concat(part2);
        
        // Join with original line ending (infer from first line or default to \n)
        // Simple \n is usually fine for JS source, but let's be safe.
        const newContent = newLines.join('\n');
        
        fs.writeFileSync(path, newContent);
        console.log('File updated successfully. Legacy lines removed.');
    } else {
        console.error('Validation failed. Lines do not match expected content. Aborting.');
        process.exit(1);
    }

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
