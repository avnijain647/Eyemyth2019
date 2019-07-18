$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
if(windowWidth>400){
    if (pixels <= 74){
       $('.lockup').css('font-size', 90 - pixels)
    }


    if (pixels <= 90){
       $('.lockup').css('padding-top', 100 - pixels)
        $('.lockup').css('padding-left', 100 - pixels)
    }
  }
  if(windowWidth<400){
      if (pixels <= 32){
         $('.lockup').css('font-size', 48 - pixels)
      }


      if (pixels <= 10){
         $('.lockup').css('padding-top', 20 - pixels)
          $('.lockup').css('padding-left', 20 - pixels)
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
