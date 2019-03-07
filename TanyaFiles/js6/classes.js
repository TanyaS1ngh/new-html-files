class Student{
    constructor(a,b){
        this.firstname=a;
        this.lastname=b;
        this.age;
    }
    getFullName(){return this.firstname+this.lastname;
    }
}
let stu=new Student();

stu.firstname="kiran";
stu.lastname="pvs"
stu.age=20;
console.log(stu);

// class Dept extends Student{
//     constructor(a,b){
//         super(a,b);
//         this.deptname;
//         this.deptfloor;
//     }

// }


// let  ece=new Dept(a,b);
console.log(stu);

let m= new Map();
m.set('abc','def');
m.set('x','y');
m.delete('abc');

m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})
console.log(m.size)

let s=new Set();
s.add('abc1');
s.add('abc2');
s.add('abc3');

console.log(s)