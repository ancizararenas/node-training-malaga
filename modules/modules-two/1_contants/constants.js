// Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. 
// Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content 
// is an object, this means the object itself can still be altered).

// ECMASript 5

//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();


// ECMASript 6

{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}