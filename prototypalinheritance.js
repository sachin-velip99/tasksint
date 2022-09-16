//oops
//prototypes
//person constructor
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

//greeting
Person.prototype.greeting = function(){
    return `hello ${this.firstname} ${this.lastname}`;
}

const Person1 = new Person('Jhon', 'Cena');

//console.log(Person1.greeting());

//customer constructor
function Customer(firstname, lastname, phone, membership){
    Person.call(this , firstname, lastname);

    this.phone = phone;
    this.membership = membership;
}

//inherit the person prototypes methods
Customer.prototype = Object.create(Person.prototype);

//make customer prototype return customer
Customer.prototype.constructor = Customer;

//create customer
const Customer1 = new Customer('Randy', 'Ortan', '9034784584', 'standard');

console.log(Customer1);

//customer greeting
Customer.prototype.greeting = function(){
    return `hello ${this.firstname} ${this.lastname} welcome to company`;
}

console.log(Customer1.greeting());