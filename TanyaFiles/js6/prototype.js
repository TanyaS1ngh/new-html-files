// (function(){
//     var a=[1,2,3,4,5,6,7];
    
//         Array.prototype.even=function(){
//             console.log(this);
//         }

//     a.even();
//     var b = [1,2];
//     b.even();
// }
// )()

// (function(){
// var obj= new Object();
// Object.prototype.func=function(){console.log("pro")}
// obj.func();
// }
// )()


    var marks=[1,2,3,4,5,6,7];
    var res= marks.filter((x,i)=>{
        return x%2==0
    })
    var res1=marks.filter(x=>x%2==0)
    Array.prototype.even=function(){};  
    const a=;
    a=20;