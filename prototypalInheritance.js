var animal, rabbit;
 animal={
    eats:true,
    walk(){alert("animal walk");}   
};
 rabbit={
    jumps:true,
    eats:false
};

rabbit.__proto__=animal;
// animal.__proto__=rabbit;
console.log(rabbit.eats)
animal.__proto__.check="hello";
console.log(animal.__proto__);