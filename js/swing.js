;$(function() {
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
      if(index >= 7){
        index = 0
      }
      var left = -1230*index
      var sept = (left-image.offsetLeft)/6
      sept = sept>0 ? Math.ceil(sept) : Math.floor(sept);
      image.style.left = image.offsetLeft+sept+"px"
      if(image.offsetLeft == left){
        index++
      }
    }
    
    }



  
})