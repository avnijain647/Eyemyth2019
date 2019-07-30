$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
var windowWidth = $(window).width()

  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
if(windowWidth>750){
  $('.bar').css('width', 80 + percentage)
    if (pixels <= 216){
       $('.eyemyth').css('font-size', 200 - pixels)
        $('.festival').css('font-size', 150 - pixels * 5)
          // $('.festival1').css('max-width', 800 - pixels * 5)
          // $('.festival2').css('max-width', 800 - pixels * 5)
        // $('.festival2').css('font-size', 160 - pixels * 5)
        $('.dates').css('font-size', 50 - pixels)

        $('.mumbai').css('font-size', 50 - pixels * 2)
    }
    else {
      // $('.festival1').css('max-width', 0)
      // $('.festival2').css('max-width', 0)
       $('.eyemyth').css('font-size', 24 )
       $('.festival').css('font-size', 0)
       // $('.festival2').css('font-size', 0)
       $('.dates').css('font-size', 24)
       $('.mumbai').css('font-size', 0)

    }

    if (pixels <= 90){
       $('.lockup').css('padding-top', 100 - pixels)

    }
    else {
       $('.lockup').css('padding-top', 10)

    }
    if (pixels >= 500){
       // $('.jello').addClass('.jelloanimate')

    }
    else {

    }
  }
  if(windowWidth<750){
      if (pixels <= 32){
         $('.lockup').css('font-size', 50 - pixels)
          $('.festival').css('font-size', 27 - pixels )
            $('.mumbai').css('font-size', 16 - pixels )
      }
      else {
         $('.lockup').css('font-size', 16 )
          // $('.lockup').css('height', 48 )
         $('.festival').css('font-size', 0 )
           $('.mumbai').css('font-size', 0 )
      }

      if (pixels <= 10){
         $('.lockup').css('padding-top', 210 - pixels)
          $('.lockup').css('padding-left', 30 - pixels)
      }
      else {
         $('.lockup').css('padding-top', 10)
          $('.lockup').css('padding-left', 10)
      }
    }
    // if (pixels <= 90){
    //    $('.lockup').css('height', 100  - pixels)
    //
    // }
  // var pixellockup = pixels + 64


 // $('.lockup').css('top', 100 - pixels )
 // $('.lockup').css('left', 100 - pixels )
  // $('.lockup').css('font-size', 84 - pixellockup)

  // for (var pixels = $(document).scrollTop(); pixels<= 64; pixels++){
  //   $('.lockup').css('font-size', 84 - pixels)
  //
  // }
  // for (var pixel = 1; pixel<= 80; pixel++){
  //   $('.lockup').css('top', 100 - pixel )
  //   $('.lockup').css('left', 100 - pixel )

  // $('.festival').css('font-size', 84 - pixelfestival + 84 )
   // $('.bar').css('width', percentage + 'vh')
 //   $('.project_name').css('opacity', 1 - pixels / 300)

 })
