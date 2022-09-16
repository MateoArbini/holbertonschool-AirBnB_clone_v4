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
  $.get('http://924ff86aab37.a5066603.hbtn-cod.io:5001/api/v1/status/', function (data) {
    // Si el status de la peticion es OK, agregamos la clase
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    // De lo contrario, removemos la clase
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  // Funcion que se ejecuta al clickear el Boton
  const btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let amenitiesid = [];
    $('input[type=checkbox]').change(function () {
      if ($(this).prop('checked')) {
          amenitiesid.push($(this).attr('data-id'))
    }};
    $("section.places").empty();
    $.ajax({
      type: 'POST',
      url: 'http://924ff86aab37.a5066603.hbtn-cod.io:5001/api/v1/places_search/',
      data: JSON.stringify({'amenities': amenitiesid}), // Convertir a string
      dataType: 'json',
      contentType: 'application/json',
      // On success we call funcition "data" y hacemos un for para "appendiar"
      // toda la info que haya en "data" que seria todos los places
      success: function (idAmenity) {
        for (let i = 0; i < idAmenity.length; i++) {
          $('section.places').append(`
            <article>
                <div class="title_box">
                    <h2>${idAmenity[i].name}</h2>
                    <div class="price_by_night">${idAmenity[i].price_by_night}</div>
                </div>
                <div class="information">
                    <div class="max_guest"> ${idAmenity[i].max_guest} Guest</div>
                        <div class="number_rooms"> ${idAmenity[i].number_rooms} Bedrooms</div>
                        <div class="number_bathrooms"> ${idAmenity[i].number_bathrooms} Bathrooms</div>
                    </div>
                    <div class="user">
                    </div>
                        <div class="description">${idAmenity[i].description}</div>
            </article>`);
        }
      }
    });
  });
});
