const name = process.argv[2] || 'User';
const util = require('util');
console.log(util.format('%s', `Hi ${name}!`));
