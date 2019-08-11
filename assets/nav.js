$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
var windowWidth = $(window).width()
// var heightvoid = 100+'vh'
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
  var bardiff =  windowWidth - 200
var barpercentage = percentage * bardiff/100



if(windowWidth>750){
  $('.bar').css('width', barpercentage  )
    if (pixels <= 20){
       $('.eyemyth').css('font-size', 160 - pixels/10)
        $('.festival').css('font-size', 80 - pixels * 10)

        $('.dates').css('font-size', 80 + pixels/3)

        $('.mumbai').css('font-size', 80 - pixels * 10)
      $('.voidposition').css('opacity', 1 - pixels/250  )
    }
    else {
// $('.void').css('height', 0 )
$('.voidposition').css('opacity', 0 )
       $('.eyemyth').css('font-size', 24 )
       $('.festival').css('font-size', 0)

       $('.dates').css('font-size', 24)
       $('.mumbai').css('font-size', 0)

    }
    if (pixels >= 10){
       // $('.eyemyth').css('font-size', 200 - pixels)
        $('.festival').css('font-size', 0)

        // $('.dates').css('font-size', 50 - pixels)

        $('.mumbai').css('font-size', 0)
    }


    if (pixels <= 90){
         $('.lockup').css('padding-top', 10)
       // $('.lockup').css('padding-top', 100 - pixels)

    }
    else {


    }

  }
  if(windowWidth<750){

      console.log(barpercentage)

      $('.bar').css('width', barpercentage )
      if (pixels <=300){
          $('.bar').css('width', 0 )
// $('.eyemyth').css('display', 'block')

         // $('.eyemyth').css('font-size', 63 - pixels/50)
          // $('.festival').css('font-size', 35  - pixels*20)
            // $('.mumbai').css('font-size', 35 - pixels*20 )
            // $('.dates').css('font-size', 21  - pixels/1000)
            // $('.festival').css('opacity', 1 - pixels/50  )
            // $('.mumbai').css('opacity', 1 - pixels/50  )
            // $('.voidposition').css('opacity', 1 - pixels/400  )
            $('.eyemyth').css('font-size', 56  )
             $('.festival').css('font-size', 35  )
               $('.mumbai').css('font-size', 21)
               $('.dates').css('font-size', 21  )
               $('.festival').css('opacity', 1   )
               $('.mumbai').css('opacity', 1 )
               $('.voidposition').css('opacity', 1   )
      }

      else {
  // $('.eyemyth').css('display', 'inline')
        $('.eyemyth').css('font-size', 35)
         // $('.festival').css('font-size', 0 )
           // $('.mumbai').css('font-size', 0 )
           $('.dates').css('font-size', 21  )
           // $('.voidposition').css('opacity', 0  )
      }

      if (pixels <= 10){
          // $('.bar').css('width', 100)
         // $('.lockup').css('padding-top', 210 - pixels)

      }
      else {

         $('.lockup').css('padding-top', 10)

      }
    }

 })








      var doc = document.getElementById("#ticker");
      var color = ["#8AFE4F", "#FF40FF", "#FFF", "#37A7FF", "#CA83F6", "#F5A623"];
      // "#F4E243"
      var textArray = [
          'Bungee',
              'Bungee Outline',
              'Bungee Shade',
                'Bungee Hairline',
                'Bungee Inline'
          // 'VT323',
          // 'Space Mono',
          // 'B612',
          // 'Nova Mono',
          // 'Ubuntu Mono'

      ];
      var i = 0;
      function change() {
        // doc.style.fontfamily = textArray[i];
        $(".greenblock").css("font-family", textArray[i]);
        i++;
        $(".greenblock").css("color", color[i]);
        i++;
        if(i > textArray.length - 1) {
          i = 0;
        }
      }
      setInterval(change, 150);

    var speed = 50;
       var first = 0;
       var pause = 900;
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
