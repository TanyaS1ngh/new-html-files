(function(){
'use strict'

var btn=document.getElementById('btnTest');
btn.addEventListener('click',function(e){
    console.log(e);
    console.log(this);
 
})

var press=document.getElementById('textBox');
press.addEventListener('keypress',function(f){
    console.log(f);
    console.log(this);
    // validateInput(e,/^[A-Za-z]+$/)                   
    // f.preventDefault();
    var myregexp=/^[A-Za-z]+$/;
    if (myregexp.test(f.key)){

    }else{
        f.preventDefault();
    }
    // regexp.test
    // console.log(f.key)
})
// function validateInput(f,regex){
//     if(regex.test(f.key)){

//     }
//     else{
//         f.preventDefault();
//     }
// }
})();