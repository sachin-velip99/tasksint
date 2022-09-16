//functions

//function declaration

function greet(){
    console.log('hello');
}

//with arguments
function greet(firstName, lastName){
    console.log('hello' + ' '+firstName+' '+lastName);
}

//for not defined arguments
function greetf(firstName = 'rock', lastName = 'den'){
    //if(typeof firstName === 'undefined'){firstName = 'rock'}
    //if(typeof lastName === 'undefined'){lastName = 'den'}
    return 'hello' + ' '+firstName+' '+lastName;
}

greet();
greet('tom','costa');
console.log(greetf());

//function expression

let square = function(x = 1){
    return x*x;
}

console.log(square(5));

//immediatelly invokable functions expressions IIFEs

(function(){
    console.log('IIFEs...');
})();

(function(name){
    console.log('hello '+name);
})('peter');

let abc = () =>{
    console.log('hello abc');
}

//property methods

const todo = {
    add: function(){
        console.log('add todo');
    },
    edit: function(id){
        console.log('edit todo '+id)
    }
}

todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit(5);
todo.delete();

