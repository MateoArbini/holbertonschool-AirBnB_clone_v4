const $ = window.$;

// Load DOM first and then aply functions
$(document).ready(function () {
  const idAmenity = {};
  $('input[type=checkbox]').change(function () {
    // Si se chequeo el checkbox se agrega al diccionario
    if ($(this).prop('checked')) {
      // Lo agregamos pasando el key (data-id) y el value (data-name)
      idAmenity[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      // Si el checkbox no esta check se elimina
      delete idAmenity[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(idAmenity).join(', '));
  });
});
  $.getJSON('bb1c0825ee1d.e0de4a8b:5001/api/v1/status/', function (data) {
    // Si el status de la peticion es OK, agregamos la clase
    if (data.status === "OK") {
        $('#api_status').addClass('available')
    // De lo contrario, removemos la clase
    } else {
        $('#api_status').removeClass('available')
    }
});

