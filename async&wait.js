//asyncronous
//async & wait

async function func1(){  //async return promise
    console.log('Inside func1 function');  //this will get excute after before calling func
    const response = await fetch('https://api.github.com/users'); //this will tell the controll to move forward
    //after executing first await before response get printed
    console.log('before response'); //after last line this get executed
    const users = await response.json();//2 async is the last one to get excuted because there no instructions after it
    console.log('users involved')
    return users; //promise resolved and executes a.then
}

console.log("Before calling func1") //starts fom here
let a = func1();
console.log("After calling func1") //first await transfers controll here this get executed
console.log(a); //the promise
a.then(data => console.log(data)) //this will get executed after response is resolved
console.log("last line of this js file") //this gets executed after calling func1