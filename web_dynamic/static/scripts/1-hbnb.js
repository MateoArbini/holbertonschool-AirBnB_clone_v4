// let list_of_checks = [];
// console.log("Hola")

// $( document ).ready(function() {
//     console.log("Se cargo el DOM")
//     if ( $("el").is(':checked') ){
//         if ($("#el").prop("checked")) {
//             list_of_checks.push($("#el").attr("id"))
//             console.log(list_of_checks) } } } );
const idAmenity = [];

$(document).ready(function () {
	let checkedAmenities = {};
	$("input[type=checkbox]").change(function () {
	if ($(this).prop("checked")) {
		idAmenity.push($(this).data("id"))
		console.log("aaaayuda", idAmenity)
	  } else {
		idAmenity.splice(idAmenity.indexOf($(this).data("id"), 1));
		console.log("chauu", idAmenity)
	  }
	});
  });