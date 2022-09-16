//oops
//constructors
function Person(name,dob){
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateage = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const tom = new Person('tom', 'May 5 2010');
//console.log(tom);
console.log(tom.calculateage());