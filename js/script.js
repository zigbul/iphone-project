$(document).ready(function () {
   $('.images-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 3,
      speed: 1000,
      infinite: true,
      centerMode: true,
      responsive: [
         {
            breakpoint: 811,
            settings: {
               slidesToShow: 1,
               centerMode: false,
            }
         }
      ],
      asNavFor: '.content-slider'
   });

   $('.content-slider').slick({
      adaptiveHeight: true,
      arrows: false,
      asNavFor: '.images-slider',
      fade: true,
   });
});