//closures
//function binded together its lexical environment

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y(); 
}
x();


function ab(){
    var b = 8;
    function cd(){
        console.log(b);
    }
    return cd;
}
var z = ab();
console.log(z); //this will print function

z(); //this will return 8

//one more 

function k(){
    var l = 50;
    function m(){  //closure m
        var n = 60;
        function op(){  //closure op
            console.log(l,n);
        }op();
    }m();
}k();