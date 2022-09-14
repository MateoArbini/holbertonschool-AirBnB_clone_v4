#!/usr/bin/node
// Script to be exectued when the DOM is loaded

let list_of_checks = [];
console.log("Hola")

$( document ).ready(function() {
    console.log("Se cargo el DOM")
    if ( $("el").is(':checked') ){
        if ($("#el").prop("checked")) {
            list_of_checks.push($("#el").attr("id"))
            console.log(list_of_checks) } } } );