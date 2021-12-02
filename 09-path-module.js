const path = require('path');

// platform specific seperator
console.log(path.sep); 

// join: joins a sequence of path segmentsusing that platform specific seperator
// it returns normalized resulting path

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// resolve: returns absolute path
const absoulte = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absoulte);