// Block-scoped variables (and constants) without hoisting.

// ECMASript 5

var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];    
}
for (i = 0; i < b.length; i++) {
    y = b[i];    
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

// ECMASript 6

for (let i = 0; i < a.length; i++) {
    let x = a[i]    
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]    
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
