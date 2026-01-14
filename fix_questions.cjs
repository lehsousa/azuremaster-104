const fs = require('fs');
const path = 'src/questions.js';

try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split(/\r?\n/);

    console.log(`Total lines: ${lines.length}`);

    // Adjust lines due to previous check failure if any changes happened?
    // Assuming file is untouched.
    
    // Indices based on previous checks
    // Line 843 (index 842) -> '  modulo3: ['
    // Line 924 (index 923) -> '    {'
    
    const indexStartDrop = 843; // Line 844
    const indexEndDrop = 922;   // Line 923
    // We want to keep 0..842 (first 843 lines)
    // Drop 843..922
    // Keep 923..End
    
    if (lines.length < 924) {
        console.error('File too short. Aborting.');
        process.exit(1);
    }

    const line843 = lines[842];
    const line924 = lines[923];

    console.log(`Line 843 (Index 842): "${line843}"`);
    console.log(`Line 924 (Index 923): "${line924}"`);

    if (line843.trim() === 'modulo3: [' && line924.trim() === '{') {
        const part1 = lines.slice(0, 843);
        const part2 = lines.slice(923);
        
        console.log(`Keeping ${part1.length} lines from start.`);
        console.log(`Keeping ${part2.length} lines from end.`);
        
        const newLines = part1.concat(part2);
        
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
