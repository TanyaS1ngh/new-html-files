// var a= document.getElementById("qwer");
// console.log(a);


// function hello(){
//     this.MyName="kiran";
// }
// hello();


// function outer(){
//     var x=10;
//     return function(){
//         console.log(x);
//     };
// }


// var exec=outer();


function bookTicket(mode) {
    var discount = mode == 'flight' ? 10 : mode == 'cruise' ? 20 : mode == 'train' ? 30 : 0;
    var price = Math.floor((Math.random() * 1000) + 1);
    return {
        printTicket: function (source, destination) {
            return function () {
                console.log('i am 2nd level closure');
                console.log('Price:' + price);
                console.log('Discount:' + discount);
                console.log('Source:' + source)
            }
        },
        printDiscount: function (source, destination) {
            console.log("Discount" + price * (discount / 100));
        }
    }
}
var flight = bookTicket('flight');
var train = bookTicket('train');
var cruise = bookTicket('cruise');

flight.printTicket('abc', 'def');
flight.printTicket('abc1', 'def1');
flight.printTicket('abc2', 'def2');

