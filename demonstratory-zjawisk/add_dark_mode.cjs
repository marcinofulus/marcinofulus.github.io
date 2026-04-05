const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /\bbg-white\b/g, replacement: 'bg-white dark:bg-gray-900' },
  { regex: /\bbg-gray-50\b/g, replacement: 'bg-gray-50 dark:bg-gray-800' },
  { regex: /\bbg-gray-100\b/g, replacement: 'bg-gray-100 dark:bg-gray-800' },
  { regex: /\bbg-gray-200\b/g, replacement: 'bg-gray-200 dark:bg-gray-700' },
  { regex: /\bbg-gray-800\b/g, replacement: 'bg-gray-800 dark:bg-gray-100' },
  { regex: /\bbg-gray-900\b/g, replacement: 'bg-gray-900 dark:bg-gray-50' },
  { regex: /\bbg-white\/50\b/g, replacement: 'bg-white/50 dark:bg-gray-900/50' },
  { regex: /\bbg-white\/90\b/g, replacement: 'bg-white/90 dark:bg-gray-900/90' },
  { regex: /\btext-gray-900\b/g, replacement: 'text-gray-900 dark:text-gray-100' },
  { regex: /\btext-gray-800\b/g, replacement: 'text-gray-800 dark:text-gray-200' },
  { regex: /\btext-gray-700\b/g, replacement: 'text-gray-700 dark:text-gray-300' },
  { regex: /\btext-gray-600\b/g, replacement: 'text-gray-600 dark:text-gray-400' },
  { regex: /\btext-gray-500\b/g, replacement: 'text-gray-500 dark:text-gray-400' },
  { regex: /\btext-gray-400\b/g, replacement: 'text-gray-400 dark:text-gray-500' },
  { regex: /\bborder-gray-100\b/g, replacement: 'border-gray-100 dark:border-gray-800' },
  { regex: /\bborder-gray-200\b/g, replacement: 'border-gray-200 dark:border-gray-700' },
  { regex: /\bborder-gray-300\b/g, replacement: 'border-gray-300 dark:border-gray-600' },
  { regex: /\bborder-gray-700\b/g, replacement: 'border-gray-700 dark:border-gray-300' },
  { regex: /\bbg-yellow-50\b/g, replacement: 'bg-yellow-50 dark:bg-yellow-900/30' },
  { regex: /\btext-yellow-900\b/g, replacement: 'text-yellow-900 dark:text-yellow-200' },
  { regex: /\bbg-indigo-50\b/g, replacement: 'bg-indigo-50 dark:bg-indigo-900/30' },
  { regex: /\btext-indigo-900\b/g, replacement: 'text-indigo-900 dark:text-indigo-200' },
  { regex: /\btext-indigo-800\b/g, replacement: 'text-indigo-800 dark:text-indigo-300' },
  { regex: /\btext-indigo-700\b/g, replacement: 'text-indigo-700 dark:text-indigo-400' },
  { regex: /\bborder-indigo-100\b/g, replacement: 'border-indigo-100 dark:border-indigo-800' },
  { regex: /\bborder-indigo-200\b/g, replacement: 'border-indigo-200 dark:border-indigo-700' },
  { regex: /\bbg-purple-50\b/g, replacement: 'bg-purple-50 dark:bg-purple-900/30' },
  { regex: /\btext-purple-900\b/g, replacement: 'text-purple-900 dark:text-purple-200' },
  { regex: /\btext-purple-700\b/g, replacement: 'text-purple-700 dark:text-purple-400' },
  { regex: /\bborder-purple-200\b/g, replacement: 'border-purple-200 dark:border-purple-700' },
  { regex: /\bbg-blue-50\b/g, replacement: 'bg-blue-50 dark:bg-blue-900/30' },
  { regex: /\btext-blue-900\b/g, replacement: 'text-blue-900 dark:text-blue-200' },
  { regex: /\bbg-green-50\b/g, replacement: 'bg-green-50 dark:bg-green-900/30' },
  { regex: /\btext-green-700\b/g, replacement: 'text-green-700 dark:text-green-400' },
  { regex: /\bborder-green-200\b/g, replacement: 'border-green-200 dark:border-green-700' },
  { regex: /\bbg-red-50\b/g, replacement: 'bg-red-50 dark:bg-red-900/30' },
  { regex: /\btext-red-700\b/g, replacement: 'text-red-700 dark:text-red-400' },
  { regex: /\bborder-red-200\b/g, replacement: 'border-red-200 dark:border-red-700' },
  { regex: /\bbg-slate-50\b/g, replacement: 'bg-slate-50 dark:bg-slate-800' },
  { regex: /\bbg-slate-100\b/g, replacement: 'bg-slate-100 dark:bg-slate-800' },
  { regex: /\bborder-slate-200\b/g, replacement: 'border-slate-200 dark:border-slate-700' },
  { regex: /\btext-slate-800\b/g, replacement: 'text-slate-800 dark:text-slate-200' },
  { regex: /\btext-slate-700\b/g, replacement: 'text-slate-700 dark:text-slate-300' },
  { regex: /\btext-slate-600\b/g, replacement: 'text-slate-600 dark:text-slate-400' },
  { regex: /\btext-slate-500\b/g, replacement: 'text-slate-500 dark:text-slate-400' },
  { regex: /\bfrom-indigo-50\b/g, replacement: 'from-indigo-50 dark:from-indigo-950' },
  { regex: /\bto-purple-50\b/g, replacement: 'to-purple-50 dark:to-purple-950' },
  { regex: /\bfrom-gray-900\b/g, replacement: 'from-gray-900 dark:from-gray-100' },
  { regex: /\bto-gray-800\b/g, replacement: 'to-gray-800 dark:to-gray-200' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  // Clean up doubles
  content = content.replace(/dark:bg-gray-900 dark:bg-gray-900/g, 'dark:bg-gray-900');
  content = content.replace(/dark:bg-gray-800 dark:bg-gray-800/g, 'dark:bg-gray-800');
  content = content.replace(/dark:bg-gray-700 dark:bg-gray-700/g, 'dark:bg-gray-700');
  content = content.replace(/dark:text-gray-100 dark:text-gray-100/g, 'dark:text-gray-100');
  content = content.replace(/dark:text-gray-200 dark:text-gray-200/g, 'dark:text-gray-200');
  content = content.replace(/dark:text-gray-300 dark:text-gray-300/g, 'dark:text-gray-300');
  content = content.replace(/dark:text-gray-400 dark:text-gray-400/g, 'dark:text-gray-400');
  content = content.replace(/dark:border-gray-800 dark:border-gray-800/g, 'dark:border-gray-800');
  content = content.replace(/dark:border-gray-700 dark:border-gray-700/g, 'dark:border-gray-700');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      if (!fullPath.includes('Home.tsx') && !fullPath.includes('Layout.tsx')) {
        processFile(fullPath);
      }
    }
  }
}

walkDir('./src/pages');
