const os = require('os');
const util = require('util');
const fs = require('fs');
const path = require('path');

const OSplatform = os.platform();
const filename = "node_testing.txt";

console.log(util.format("These are some tests running node.js on: %s ", OSplatform));

fs.writeFile(filename, 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log(util.format('%s has been saved in folder %s', filename, path.dirname(filename)));
    fs.unlink(filename, (err) => {
        if (err) throw err;
    console.log(util.format('%s was deleted', filename));
    });
});