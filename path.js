const path = require('path');
const file = process.argv[2] || '.';
console.log(path.extname(file));
