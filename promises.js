//promises
//resolve, reject, pending

function func1(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Your promise has been resolved')
                resolve();
            }
            else{
                console.log('Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

//if promise get resolved or not

func1().then(function(){    //then will get executed if resolved
    console.log("Thanks for resolving")
}).catch(function(error){    //catch will get executed if reject
    console.log('Very bad Reason: '+error)
})