const fs = require('fs');

fs.readFile('os.js', 'utf8', function(err, data) {
    if (err) throw err;

    console.log('The code of the "os" exercise is:');
    console.log(data);
});
