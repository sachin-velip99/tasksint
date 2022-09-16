//oops
//sub classes es6
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

class Customer extends Person {
    constructor(firstname, lastname, phone, membership){
        super(firstname, lastname);

        this.phone = phone;
        this.membership = membership;
    }

    static getmembership(){
        return 1000;
    }
}

const jhon = new Customer('Jhon', 'Cena', '34839373', 'standard');

console.log(jhon.greeting());

console.log(Customer.getmembership());