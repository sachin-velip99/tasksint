//object.prototype
function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    this.calculateage = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

Person.prototype.calculateage = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getfullname = function(){
    return `${this.firstname} ${this.lastname}`;
}

const tom = new Person('tom', 'jack', 'May 5 2010');
console.log(tom);

console.log(tom.calculateage());
console.log(tom.getfullname());