function* generatorFunction(){
    console.log('This is 1st');
    yield 'hello';
    console.log('2nd');
    yield 'world';
}

const generatorObject=generatorFunction();
console.log(generatorObject.next().value);
console.log("interrupt");
console.log(generatorObject.next().value);
// console.log("interrupt")
console.log(generatorObject.next().value);