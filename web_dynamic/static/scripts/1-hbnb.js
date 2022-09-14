// let list_of_checks = [];
// console.log("Hola")

// $( document ).ready(function() {
//     console.log("Se cargo el DOM")
//     if ( $("el").is(':checked') ){
//         if ($("#el").prop("checked")) {
//             list_of_checks.push($("#el").attr("id"))
//             console.log(list_of_checks) } } } );

const idAmenity = [];

console.log("holaaa");

$(document).ready(function() {
    console.log("dogchaw");
    $("input[type=checkbox]").change(function(){
        if ($(this).prop("checked")) {
            idAmenity.push($(this).attr("id"))
            console.log("aaaaaa", idAmenity)
        }
        console.log("ayuda")
    })
})