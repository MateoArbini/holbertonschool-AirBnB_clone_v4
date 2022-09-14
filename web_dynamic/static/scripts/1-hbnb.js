#!/usr/bin/node
// Script to be exectued when the DOM is loaded

let list_of_checks = [];

$( document ).ready(function() {
    if ($("#el").is(":checked")) {
        list_of_checks.push(.attr(data-id)})
        console.log("Hola")
    } else {
        for (let i = 0; i < list_of_checks.length; i++) {
            if (i === data-id) {
                list_of_checks.splice(i, list_of_checks[i])
            }
        }
    }
})