// Support for computed names in object property definitions.



var obj = {
    foo: "bar"
};
obj[ "baz" + quux() ] = 42;


let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}