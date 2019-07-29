


$(".yellowfont").css("font-family", function() {


  var textArray = [
      'Space Mono',
      'VT323'
  ];

  var rando = Math.floor(Math.random()*textArray.length);
  return textArray[rando];



});
