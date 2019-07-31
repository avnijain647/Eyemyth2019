$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
var windowWidth = $(window).width()

  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
if(windowWidth>750){
  $('.bar').css('width', 40 + percentage )
    if (pixels <= 100){
       $('.eyemyth').css('font-size', 200 - pixels)
        $('.festival').css('font-size', 150 - pixels * 5)

        $('.dates').css('font-size', 50 - pixels)

        $('.mumbai').css('font-size', 50 - pixels * 2)
    }
    else {

       $('.eyemyth').css('font-size', 24 )
       $('.festival').css('font-size', 0)

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
      $('.bar').css('width', 5 + percentage )
      if (pixels <=14){
         $('.eyemyth').css('font-size', 100 - pixels)
          $('.festival').css('font-size', 60  + pixels)
            $('.mumbai').css('font-size', 50 + pixels )
            $('.dates').css('font-size', 50  + pixels)
      }
      // if (pixels >= 20){
      //    $('.eyemyth').css('font-size', 60 - pixels)
      //     $('.festival').css('font-size', 30 + pixels )
      //       $('.mumbai').css('font-size', 21 + pixels )
      //       $('.dates').css('font-size', 21 + pixels )
      // }
      else {
        $('.eyemyth').css('font-size', 36)
         $('.festival').css('font-size', 0 )
           $('.mumbai').css('font-size', 0 )
           $('.dates').css('font-size', 21  )
      }

      if (pixels <= 10){
          $('.bar').css('width', 100)
         // $('.lockup').css('padding-top', 210 - pixels)

      }
      else {

         $('.lockup').css('padding-top', 10)

      }
    }
  // if(windowWidth<750){
  //     $('.bar').css('width', 5 + percentage )
  //     if (pixels <= 30){
  //        $('.eyemyth').css('font-size', 80 - pixels)
  //         $('.festival').css('font-size', 30 - pixels )
  //           $('.mumbai').css('font-size', 21 - pixels )
  //           $('.dates').css('font-size', 21 - pixels )
  //     }
  //     else {
  //       $('.eyemyth').css('font-size', 36)
  //        $('.festival').css('font-size', 0 )
  //          $('.mumbai').css('font-size', 0 )
  //          $('.dates').css('font-size', 21  )
  //     }
  //
  //     if (pixels <= 10){
  //        $('.lockup').css('padding-top', 210 - pixels)
  //
  //     }
  //     else {
  //        $('.lockup').css('padding-top', 10)
  //
  //     }
  //   }

 })








      var doc = document.getElementById("#ticker");
      // var color = ["black", "blue", "brown", "green"];
      var textArray = [
          'Space Mono',
          'B612',
          'Nova Mono',
          'Ubuntu Mono',
          'VT323'
      ];
      var i = 0;
      function change() {
        // doc.style.fontfamily = textArray[i];
        $(".yellowfont").css("font-family", textArray[i]);
        i++;

        if(i > textArray.length - 1) {
          i = 0;
        }
      }
      setInterval(change, 1500);

    var speed = 50;
       var first = 0;
       var pause = 1500;
    function tick() {
        first = $('ul#ticker li:first').html();
        $('ul#ticker li:first').animate({
            height: 0
        }, speed).hide('medium', function() {
            $(this).remove();

            last = '<li>' + first + '</li>';
            $('ul#ticker').append(last);

        });
    }

    $('ul#ticker').click(function() {

        tick();
        return false;
    });
    setInterval(tick, pause);
