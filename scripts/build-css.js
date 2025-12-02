const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy main styles
const stylesSource = path.join(__dirname, '..', 'src', 'styles.css');
const stylesDest = path.join(distDir, 'styles.css');
fs.copyFileSync(stylesSource, stylesDest);
console.log('✅ Copied styles.css');

// Create themes directory in dist
const themesDistDir = path.join(distDir, 'themes');
if (!fs.existsSync(themesDistDir)) {
  fs.mkdirSync(themesDistDir, { recursive: true });
}

// Copy all theme files
const themesSourceDir = path.join(__dirname, '..', 'src', 'themes');
const themeFiles = fs.readdirSync(themesSourceDir);

themeFiles.forEach(file => {
  if (file.endsWith('.css')) {
    const source = path.join(themesSourceDir, file);
    const dest = path.join(themesDistDir, file);
    fs.copyFileSync(source, dest);
    console.log(`✅ Copied themes/${file}`);
  }
});

console.log('✅ Build CSS complete!');
