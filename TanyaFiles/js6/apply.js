var obj={name:"kiran"};
var student={name:"ravi"};
var greeting=function(a,b,c){
    return "welcome "+ this.name+ " to " +a+" "+ b + " in " + c;
};

console.log(greeting.call(obj,"test1","test2","test3"));
console.log(greeting.call(student,"test1","test2","test3"));
console.log(greeting.apply(obj,["kiran","pvs","test"]));
let x=greeting.bind(obj)
console.log(x("qw","we","la"));