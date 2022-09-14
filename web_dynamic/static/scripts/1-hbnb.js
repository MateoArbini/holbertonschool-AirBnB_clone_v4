#!/usr/bin/node
// Script to be exectued when the DOM is loaded

let list_of_checks = [];
console.log("Hola")

$( document ).ready(function() {
    console.log("Se cargo el DOM")
    if ($("el").is('checked') ){
        alert("Checkbox is checked")
    } else {
        alert("Checkbox was unchecked")
    }
});