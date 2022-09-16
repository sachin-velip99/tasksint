//oops
//object create
const personPrototype = {
    greeting: function(){
        return `Hello ${this.firstname} ${this.lastname}`;
    },
    getsmarried: function(newlastname){
        this.lastname = newlastname;
    }
}

const marry = Object.create(personPrototype);
marry.firstname = 'Marry';
marry.lastname = 'Costa';
marry.age = 30;

marry.getsmarried('Perez');

console.log(marry.greeting());

const brad = Object.create(personPrototype,{
    firstname: {value: 'Brad'},
    lastname: {value: 'Pitt'},
    age: {value: 30}
});

console.log(brad);
console.log(brad.greeting());
