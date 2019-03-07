'use strict'
function clickMe(){
    var name = document.getElementById('').value;
    var pas = document.getElementById('').value;
    var emailid = document.getElementById('').value;
    var obj = {
        personName:name,
        password:pas,
        emailid:emailid
    };
    return obj;
}