// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

$(document).ready(function() {
  // chiamate Ajax per ottenere 10 file musicali
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data){
        var collezioneMusicale = data.response;
        console.log(collezioneMusicale);
        // stampa collezione musicale
        stampaCollezione(collezioneMusicale);
      },
      error: function() {
        alert('Errore');
      }
    }
  )

  function stampaCollezione(arrayMusicale) {
    var source = $("#cd-template").html();
    var template = Handlebars.compile(source);

    // inserire in handlebars i cds
    for (var i = 0; i < arrayMusicale.length; i++) {
      var singoloCd = arrayMusicale[i];
      console.log(singoloCd);
      var html = template(singoloCd);
      $('.cds-container').append(html);
    }

  $(.button).click(function() {

  })

  };
});
