// let list_of_checks = [];
// console.log("Hola")

// $( document ).ready(function() {
//     console.log("Se cargo el DOM")
//     if ( $("el").is(':checked') ){
//         if ($("#el").prop("checked")) {
//             list_of_checks.push($("#el").attr("id"))
//             console.log(list_of_checks) } } } );

const idAmenity = [];

console.log("Hola");

$(document).ready(function() {
    console.log("Se cargo el DOM");
    $("input[type=checkbox]").change(function(){
        if ($(this).prop("checked")) {
            idAmenity.push($(this).attr("data-id"))
            console.log(idAmenity)
        } else {
            for (let i = 0; i < idAmenity.length; i++) {
                if (i === "id") {
                    idAmenity.splice(i, idAmenity[i])
                    console.log("Element was deleted")
                }
            }
    })})