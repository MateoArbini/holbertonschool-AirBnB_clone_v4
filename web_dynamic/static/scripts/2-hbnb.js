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
  // Para testear, dejamos la IP de la sandbox, pero para el chequer debemos
  // Cambiar la IP a 0.0.0.0
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    // Si el status de la peticion es OK, agregamos la clase
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    // De lo contrario, removemos la clase
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
