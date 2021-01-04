$(function() {
  var $timer = null 
  var $left = $("#banner .mail-image").css("left").split('p')[0]
  timer = setInterval(function(){
    $left -= 1230
    if($left <= 0){
      $("#banner .mail-image").css("left",$left+"px").fadeTo("slow",.8).fadeTo("slow",1);
    }
    if($left <= -6150){
      $left = 1230
    }
  }, 2000);
})