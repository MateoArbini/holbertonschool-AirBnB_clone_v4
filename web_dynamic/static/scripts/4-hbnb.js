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
  $.get('http://bb1c0825ee1d.e0de4a8b.hbtn-cod.io:5001/api/v1/status/', function (data) {
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
    // Guardamos todas las amenities que se hayan chequeado
    let amenitiesId = Object.keys(idAmenity)
    // Hacemos un split para sacar la llave (}) que se nos puso
    let amenitiesSplit = amenitiesId.map(obj => obj.split("}")[0]);
    $.ajax({
      type: 'POST',
      url: 'http://bb1c0825ee1d.e0de4a8b.hbtn-cod.io:5001/api/v1/places_search/',
      data: JSON.stringify(idAmenity), // Convertir a string
      dataType: 'json',
      contentType: 'application/json',
      // On success we call funcition "data" y hacemos un for para "appendiar"
      // toda la info que haya en "data" que seria todos los places
      success: function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          $('section.places').append(`
            <article>
                <div class="title_box">
                    <h2>${data[i].name}</h2>
                    <div class="price_by_night">${data[i].price_by_night}</div>
                </div>
                <div class="information">
                    <div class="max_guest"> ${data[i].max_guest} Guest</div>
                        <div class="number_rooms"> ${data[i].number_rooms} Bedrooms</div>
                        <div class="number_bathrooms"> ${data[i].number_bathrooms} Bathrooms</div>
                    </div>
                    <div class="user">
                    </div>
                        <div class="description">${data[i].description}</div>
            </article>`);
        }
      }
    });
  });
});
