$(document).ready(function () {
'use strict' ;
const countryApi="https://restcountries.eu/rest/v2/all"
function  fetchCountries(){
    $.ajax({
        url:countryApi,
        type:"GET",

    }).then(result => {
        bindCountries(result);
    }).catch(err=>{
        console.log(err);
    });
}
function bindCountries(data){
    data.forEach((x,i)=>{
        let option= $('<option/>').val(x.region).text(x.name);
        $('#ddlCountry').append(option);
    })
}
fetchCountries();
// bindCountries();
})