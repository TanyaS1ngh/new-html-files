function * powerSeries(number,power){
    let base=number;
    while(true){
        yield Math.pow(base,power);
        base++;
    }
}

const powers= powerSeries(3,4)
// const generatorObject=generatorFunction();
console.log(powers.next().value);
