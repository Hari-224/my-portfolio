const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function checkExports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkExports(fullPath); // recursive check for subfolders
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const hasDefaultExport = /export\s+default\s+/m.test(content);
      const hasNamedExport = /export\s+(const|let|function|class)\s+/m.test(content);

      if (!hasDefaultExport && hasNamedExport) {
        console.log(`⚠️  Named export found without default in: ${fullPath}`);
      }
    }
  });
}

checkExports(componentsDir);
