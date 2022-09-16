//oops 
//built in constructors
let string1 = 'jerry';
let string2 = new String('jerry');

//string2.foo = 'bar';
//console.log(string2);

console.log(typeof string2);

if(string1 === 'jerry'){
    console.log('yes');
}
else{
    console.log('no');
}

//numbers
let num1 = 5;
let num2 = new Number(5);
console.log(typeof num2);

//boolean
let bool1 = true;
let bool2 = new Boolean(true);

//function
const getsum1 = function(x,y){
    return x+y;
}

const getsum2 = new Function('x','y','return 1+1');

//object
const jhon1 = {name: "john"};
const jhon2 = new Object({name: "jhon"});
console.log(jhon2);

//array
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr2);