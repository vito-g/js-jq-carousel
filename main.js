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

$(document).ready(function() {

  $('.next').click(function() {
    $('.images img.active').removeClass('active').next().addClass('active');
  });

  $('.prev').click(function() {
    $('.images img.active').removeClass('active').prev().addClass('active');
  });

})
