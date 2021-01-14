$(document).ready(function() {
  // function counter() {
  //   for (var i = 0; i < $('img').length; i ++) {
  //     if ($('img')[i] === $('img.last')) {
  //       console.log($('img')[i]);
  //     }
  //   }
  // }
  // // ---------------Prove Es. Funzioni--------------------------------------
  // // FX Funzionante---------------------------------------------------------
  // function somma(a,b) {
  //   var c = a + b;
  //   return c;
  // }
  // var elSomma = somma(24,26);
  // console.log(elSomma);
  //
  // //Porzione di Codice Funzionante------------------------------------------
  // function somma(a,b) {
  //   var c = a + b;
  //   return c;
  // }
  //
  // $('.next').click(function() {
  //   var elSomma = somma(24,26);
  //   console.log(elSomma);
  // });
  //
  // //Anche questa porzione funziona------------------------------------------
  // function fxSlider(imgQualsiasi) {
  //   $(imgQualsiasi).removeClass('active').next().addClass('active');
  // }
  // $('.next').click(function() {
  //   fxSlider('.images img.active');
  //   console.log('questo codice risponde');
  //   // console.log(elImg);
  // });
  // // -----------------------------------------------------------------------
  // // -----------------------------------------------------------------------

  // // ULTIMO CODICE PROVATO--------------------------------------------------
  function fxSlider(imgQualsiasi) {
    console.log($(imgQualsiasi));
    $(imgQualsiasi).removeClass('active').next().addClass('active');
    console.log('questo codice risponde');
    console.log($(imgQualsiasi));//*
    return $(imgQualsiasi);
  }
  $('.next').click(function() {
    var imgNext = fxSlider('.images img.active');
    // if ($('.images img.active').class !== $('.images img.last').class) {
    // if ($('.images img.active').attr('class') !== $('.images img.last').attr('class')) {
    if (imgNext !== $('img.last.active')) {
      fxSlider('imgNext');
      console.log(imgNext);//*
    } else {
      fxSlider('.images img.active.first');
    }
  });
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -----questa va benissimo per mandare avanti le immagini (fino ad un certo punto)-----

  // $('.next').click(function() {
  //   $('.images img.active').removeClass('active').next().addClass('active');
  //   console.log('OK NEL CLICK');
  // });

  // -----questa va benissimo per mandare indietro le immagini (fino ad un certo punto)----

  $('.prev').click(function() {
    $('.images img.active').removeClass('active').prev().addClass('active');
  });
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // ----------------Prove Console log OK-------------------------------------------------
  $('div:first-child').attr('class');
  console.log($('div:first-child').attr('class'));
  $('img:first-child').attr('class');
  console.log($('img:first-child').attr('class'));
  // $('img:nth-child(2)').attr('class');
  // console.log($('img:nth-child(2)').attr('class'));
  var elClasse = $('img')[3];
  console.log(elClasse.className);
  console.log('Questa è la lunghezza del mio array di immagini: ' + $('img').length);
  console.log('Questa è l\'ultima immagine: ');
  console.log($('img')[3]);
  console.log('Questa è l\'array di immagini: ');
  console.log($('img'));
  // console.log($('img.last'));

  console.log('PROVA FUORI DAL CLICK');
});
// --------------------------------------------------------------------------------------
