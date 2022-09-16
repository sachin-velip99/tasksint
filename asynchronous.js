//asynchronous js
//doing two or more things at same time

setTimeout(() => {
    for(let index = 0; index<400; index++){
        const element = index;
        console.log("this is index number "+ index);
    }
}, 100);

//'done printing' is printed before the loop is completed because of settimeout
console.log('done printing');