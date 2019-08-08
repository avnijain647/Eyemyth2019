$(document).on('scroll', function() {

  var pixels = $(document).scrollTop()
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var windowWidth = $(window).width()
var windowWidth = $(window).width()
// var heightvoid = 100+'vh'
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixels / difference
  var bardiff =  windowWidth - 260
var barpercentage = percentage * bardiff/100



if(windowWidth>750){
  $('.bar').css('width', barpercentage  )
    if (pixels <= 200){
       $('.eyemyth').css('font-size', 160 - pixels/10)
        $('.festival').css('font-size', 80 - pixels * 5)

        $('.dates').css('font-size', 80 + pixels/3)

        $('.mumbai').css('font-size', 80 - pixels * 2)
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

      console.log(barpercentage)

      $('.bar').css('width', barpercentage )
      if (pixels <=200){

         $('.eyemyth').css('font-size', 70 - pixels/10)
          $('.festival').css('font-size', 35  - pixels*20)
            $('.mumbai').css('font-size', 35 - pixels*20 )
            $('.dates').css('font-size', 35  - pixels/10)
            $('.festival').css('opacity', 1 - pixels/50  )
            $('.mumbai').css('opacity', 1 - pixels/50  )
            $('.voidposition').css('opacity', 1 - pixels/400  )
      }

      else {

        $('.eyemyth').css('font-size', 35)
         $('.festival').css('font-size', 0 )
           $('.mumbai').css('font-size', 0 )
           $('.dates').css('font-size', 21  )
           $('.voidposition').css('opacity', 0  )
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
        $(".greenblock").css("font-family", textArray[i]);
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
