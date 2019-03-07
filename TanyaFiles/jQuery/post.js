$(document).ready(function () {
    let payLoad = {
        country: "",
        email: "",
        mobile: ""
    };
    $('#btn1').bind('click', function () {
        payLoad.country = $('#CountryCode').val();
        payLoad.email = $('#email').val();
        payLoad.mobile = $('#mobnum').val();
        console.log(payLoad.email);
        $.ajax({
            url: 'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type: 'POST',
            data: payLoad
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err);
        })
    })
});


