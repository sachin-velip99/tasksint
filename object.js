//objects literals
const person =  {
    firstname: 'pepe',
    lastname: 'costa',
    age: 24,
    email: 'pepe@gmail.com',
    hobbies: ['reading', 'sports'],
    address: {
        city: 'Margao',
        state: 'Goa'
    },
    getBirthyear: function() {
        return 2022 - this.age;
    }
}

let val;

val = person

val = person.firstname; //invoking attributes
console.log(val);
val = person.lastname;
console.log(val);
val = person.email;
console.log(val);
val = person.hobbies;
console.log(val);
val = person.address.city;  //invoking attributes inside object
console.log(val);
val = person.address.state;
console.log(val);
val = person.getBirthyear();

console.log(val);

const people = [
    {name: 'tate', age: 25},
    {name: 'pop', age: 26}
]

for(let i = 0;i<people.length;i++){
    console.log(people[i].name);
}