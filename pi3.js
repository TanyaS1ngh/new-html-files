let animal={
    walk(){
        if(!this.isSleeping){
            alert("i walk");
        }
    },
    sleep(){
        this.isSleeping=true;
    }
};

let rabbit={
    name:"white rabbit",
    __proto__:animal
};

rabbit.sleep();//sets isSleeping to true
alert(rabbit.isSleeping);//true
alert(animal.isSleeping);//undefined

// Array.check=1;
//  var x = [];
// console.log(x.check);