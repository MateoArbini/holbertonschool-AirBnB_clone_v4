const idAmenity = {};
const $j = jQuery.noConlict();

// Load DOM first and then aply functions
$j(document).ready(function () {
  $j('input[type=checkbox]').change(function () {
    // Si se chequeo el checkbox se agrega al diccionario
    if ($j(this).prop('checked')) {
      // Lo agregamos pasando el key (data-id) y el value (data-name)
      idAmenity[$j(this).attr('data-id')] = $j(this).attr('data-name');
    } else {
      // Si el checkbox no esta check se elimina
      delete idAmenity[$j(this).attr('data-id')];
    }
    // Si el diccionario esta vacio, usamos el entity: &nbsp (non breaking space) para empezar con un espacio
    if (idAmenity.length === 0) {
      $j('div.amenities h4').html('&nbsp;');
    } else {
      $j('div.amenities h4').text(Object.values(idAmenity).join(', '));
    }
  });
});
