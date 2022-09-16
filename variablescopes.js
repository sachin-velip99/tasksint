//variable scopes
//scope chain is the reference to each lexical environment created by execution context
//execution context is a block consisting of local environment + reference to another excution context block
//let and const have block scope
//var have function scope

//global scope

var x = 1;
let y = 2;
const z = 3;

/*function pt(){
    var x = 4;
    let y = 5;
    const z = 6;
    console.log('function scope :', x, y, z); 
}
pt();*/

if(true){
    //block scope
    var x = 4;     //var will give 4  
    let y = 5;     //let y will give 2
    const z = 6;   //const z wil give 6
    console.log('global scope :', x, y, z);
}

console.log('global scope :', x, y, z);

function a() {
    var b = 10;  //lexical environment of a + reference to global environment
    c();
    function c(){
        console.log(b);  //lexical environment func C is local environment + reference to lexical parents environment
    }
}

a();    //global environment