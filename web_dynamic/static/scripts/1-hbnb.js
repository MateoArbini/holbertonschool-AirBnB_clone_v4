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
    // Si el diccionario esta vacio, usamos el entity: &nbsp (non breaking space) para empezar con un espacio
    if (idAmenity.length === 0) {
      $('div.amenities h4').html('&nbsp;');
    // Si no esta vacia se remplaza con los elementos seleccionados
    } else {
      $('div.amenities h4').text(Object.values(idAmenity).join(', '));
    }
  });
});
