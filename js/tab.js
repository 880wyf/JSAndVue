$(function() {
  var $lis = $("#commodity .supermarket-con .head-title")
  var $tabs = $("#commodity .supermarket-con .tab-content")
  var flag = 0
  var timer = null
  // 添加 天猫超市 的显示隐藏；开启定时器
  timer = setInterval(toggleTab, 1500)
  // 鼠标移入 $lis
  $lis.mouseover(function(){
    clearInterval(timer)
    $tabs.hide().eq($(this).attr("data-index")).show()
    $lis.removeClass("disblock first").eq($(this).attr("data-index")).toggleClass("disblock")
    console.log();
  })
  // 鼠标移出 $lis
  $lis.mouseout(function(){
    timer = setInterval(toggleTab, 1500)
    $lis.removeClass("disblock first").eq($(this).attr("data-index")).toggleClass("disblock")
    console.log();
  })

  // 切换 tab 栏，显示天猫超市信息
  function toggleTab(){
    if(flag){
      $tabs.hide().eq(1).show()
      $lis.removeClass("disblock first").eq(1).toggleClass("disblock")
      flag = 0
    }else{
      $tabs.hide().eq(0).show()
      $lis.removeClass("disblock first").eq(0).toggleClass("disblock")
      flag = 1
    }    
  }
})