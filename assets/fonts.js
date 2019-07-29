// var cssRandom = String($.now()).slice(-1);
// $(".eyemyth").css("font-family", function() {
//    return Math.random('Space Mono','VT323');
// });



$(".eyemyth").css("font-family", function() {


  var textArray = [
      'Space Mono',
      'VT323'
  ];
  
  var rando = Math.floor(Math.random()*textArray.length);
  return textArray[rando];



});
