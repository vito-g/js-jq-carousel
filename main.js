//
// $(document).ready(function() {
//
//   $('.button-next').click(function() {
//     $('.slider-box.active').removeClass('active').next().addClass('active');
//   })
//
//   $('.button-prev').click(function() {
//     $('.slider-box.active').removeClass('active').prev().addClass('active');
//   })
//
// })

// function reFunction() {
//
// }


// function reFunction(parametro) {
//   console.log('La foto in oggetto è: ' + parametro);
// }

$(document).ready(function() {

  function counter() {
    for (var i = 0; i < $('img').length; i ++) {
      if ($('img')[i] === $('img.last')) {
        console.log($('img')[i]);
      }
    }
  }
  var imgEl = $('img.last');
  console.log('Questa è l\'ultima immagine: ');
  console.log(imgEl);

  $('.next').click(function() {
    counter();
    $('.images img.active').removeClass('active').next().addClass('active');
  });


  $('.prev').click(function() {
    $('.images img.active').removeClass('active').prev().addClass('active');

  });

  console.log('Questa è la lunghezza del mio array di immagini: ' + $('img').length);
  console.log('Questa è l\'ultima immagine: ');
  console.log($('img')[3]);
  console.log('Questa è l\'array di immagini: ');
  console.log($('img'));

});
