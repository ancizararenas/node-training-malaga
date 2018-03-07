// More expressive closure syntax.

nums.forEach(function (v) {
    if (v % 5 === 0)
        fives.push(v);
 });



 nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
 })