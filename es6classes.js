//oops
//es6 classes

class Person {
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }

    claculteage(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsmarried(lastname){
        this.lastname = lastname;
    }

    static addnum(x, y){  //invoked using class name and .
        return x + y;
    }
}

const marry = new Person('Marry', 'Pasi', '11/13/1980');
marry.getsmarried('rony');
console.log(marry.claculteage());

console.log(Person.addnum(3,5));
