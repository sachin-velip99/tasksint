//promises

const students = [
    {name: "pop", subject: "javaScript"},
    {name: "dom", subject: "sql"}
]

function enrollStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            students.push(student);
            console.log("student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 5000);

    })
    
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}<>li`
        });
        //document.getElementById('students').innerHTML = str;
        console.log("students have been fetched");
    }, 1000)
}

let newStudent = {name:"sunny", subject:"python"}
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("the error occured")
});