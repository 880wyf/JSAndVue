$(function () {
  var $navigation = $("#navigation")
  // 滚动 显示与隐藏
  $(window).scroll(function(event){
    var $top = $(this).scrollTop()
    if($top >= 640){
      $navigation.stop().animate({
        width:"36px",
        height:"368px"
      },200)
    }else if($top < 640){
      $navigation.stop().animate({
        width:"0px",
        height:"0px"
      },200)
    }

  })
  
  // 鼠标 移入变色
  var colors = ["#00ff2a", "#0c0c0c", "#fc1dde", "#00f7ff", "#7bff00", "#ff4800", "#4bb2f7", "#090a0a"]

  var $listA = $(".nav-info a")
  
  $(window).scroll(function(){
    console.log($("body, html").scrollTop())
    var $top = $("body, html").scrollTop()
    if($top >= 1650 && $top < 2310){   
      $listA.css("background","#666666")   
      $($listA[0]).css("background","#00ff2a")
    }else if($top >= 2310 && $top < 3180){
      $listA.css("background","#666666")
      $($listA[1]).css("background","#0c0c0c")
    }else if($top >= 3180 && $top < 3850){
      $listA.css("background","#666666")
      $($listA[2]).css("background","#fc1dde")
    }else if($top >= 3850 && $top < 4650){
      $listA.css("background","#666666")
      $($listA[3]).css("background","#00f7ff")
    }else if($top >= 4650 && $top < 5315){
      $listA.css("background","#666666")
      $($listA[4]).css("background","#7bff00")
    }else if($top >= 5315 && $top < 6110){
      $listA.css("background","#666666")
      $($listA[5]).css("background","#ff4800")
    }else if($top >= 6110 && $top < 6840){
      $listA.css("background","#666666")
      $($listA[6]).css("background","#4bb2f7")
    }else if($top >= 6840 ){
      $listA.css("background","#666666")
      $($listA[7]).css("background","#090a0a")
    }else if($top < 1650){
      $listA.css("background","#666666")
    }
  })

  $listA.on("mouseover", function () {
    var index = $(this).attr("data-index")
    $(this).css("background-color",colors[index])
  })
  $listA.on("mouseout", function () { 
    $(this).css("background-color", "#666666")
  })

  var $ids = [
              "#mail-supermarket",
              "#mail-guoji",
              "#mail-rensheng",
              "#mail-kuwang",
              "#mail-jujia",
              "#mail-aicao",
              "#mail-waichu",
              "#mail-like"
            ]

  // 鼠标 点击移动
  $listA.on("click", function () {
    
    $("body, html").stop().animate({scrollTop:$($ids[$(this).attr("data-index")]).offset().top}, 400)
  })
  // 鼠标 点击置顶
  $("#navigation>.retop").on("click", function () {
    $("body, html").stop().animate({scrollTop:0}, 400)
  })

  // 设置顶部搜索框

  var $disSearch = $("#dis-search")
  $(window).scroll(function () {
    console.log($("body, html").scrollTop())
    if($("body, html").scrollTop() >= 800){
      $disSearch.stop().animate({
        height:"50px"
      },100)
    }else if($("body, html").scrollTop() < 800) {
      $disSearch.stop().animate({
        height:0
      },100)
    }
    
  })

})