$(function () {
  var $navigation = $("#navigation")
  $(document).scroll(function(event){
    $top = $(this).scrollTop()
    if($top >= 640){
      $navigation.css({
        display:"block",
        width:"36px",
        height:"369px",
        transition: "all 5s ease 5s"
      })
    }else if($top <= 640){
      $navigation.css({
        display:"none"
      })
    }

  })
   


 
})