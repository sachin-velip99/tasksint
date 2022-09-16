//hoisting
//invoking something before it is intialised
//the memory is allocated before it gets ececuted
//let and const works diffrently

console.log(x);

console.log(fname());


var x = 7;
//x = 7;

function fname(){   //only proper function works properly
    console.log('Berry');
}

var mname = function(){  //this is treated as variable
    console.log('James');
}

var lname = () => {   //this also treated as variable
    console.log('Stone');
}