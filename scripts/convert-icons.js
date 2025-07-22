const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/icons');
const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Function to convert filename to PascalCase component name
function toPascalCase(filename) {
  return filename
    .replace('.svg', '')
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .replace(/\s/g, '');
}

// Function to convert SVG content to React component
function svgToReactComponent(svgContent, componentName) {
  // Remove the SVG opening tag and replace with JSX-compatible version
  let jsxContent = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  return `import { IconProps } from '../types';

export const ${componentName} = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${jsxContent.replace(/fill="[^"]*"/g, 'fill={color}')}
  </svg>
);
`;
}

console.log(`Converting ${svgFiles.length} SVG files to React components...`);

// Convert each SVG file to a React component
const componentNames = [];
const usedNames = new Set();

svgFiles.forEach(file => {
  let componentName = toPascalCase(file);
  
  // Handle duplicates by adding a suffix
  if (usedNames.has(componentName)) {
    let counter = 2;
    while (usedNames.has(`${componentName}${counter}`)) {
      counter++;
    }
    componentName = `${componentName}${counter}`;
  }
  
  usedNames.add(componentName);
  componentNames.push(componentName);
  
  const svgPath = path.join(iconsDir, file);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  const componentContent = svgToReactComponent(svgContent, componentName);
  const componentPath = path.join(iconsDir, `${componentName}.tsx`);
  
  fs.writeFileSync(componentPath, componentContent);
  console.log(`Created ${componentName}.tsx`);
});

// Generate index file with all exports
const indexContent = `// Auto-generated icon exports
${componentNames.map(name => `export { ${name} } from './${name}';`).join('\n')}
`;

fs.writeFileSync(path.join(iconsDir, 'index.ts'), indexContent);
console.log(`Updated index.ts with ${componentNames.length} icon exports`);

console.log('Icon conversion completed!');