;$(function() {
  $(".mail-image > div").each(function () {
    $("#banner .mail-rectangle ul").append("<li></li>")
  })

  $("#banner .mail-rectangle ul li").last().remove()
  $("#banner .mail-rectangle ul li").addClass('rectangle')
  
  var $timer = null 
  var image = document.querySelector(".mail-image")
  var index = 0
  $timer = setInterval(anima, 100); 

  function anima () {
    if(image.offsetLeft == -7380){
      clearInterval($timer)
      index = 0
      image.style.left = 0   
      $timer = setInterval(anima, 100);     
    }else{
      
      var left = -1230*index
      var sept = (left-image.offsetLeft)/6
      sept = sept>0 ? Math.ceil(sept) : Math.floor(sept);
      image.style.left = image.offsetLeft+sept+"px"
      if(index != 0){
        $("#banner .mail-rectangle ul li").removeClass('on')
        $($("#banner .mail-rectangle ul li")[index]).addClass("on")
      }

      if(image.offsetLeft == left){
        index++
      }
      if(index == 6){
        $($("#banner .mail-rectangle ul li")[0]).addClass("on")
      }
    }
    
    }

  
})