;$(function () {
  var $sideNav = $("#banner .mormal-info > div")
  var $lis = $('#banner .normal-nav li')
  var index = null
  // 鼠标移入事件
  $lis.on('mouseover', function () {
    var $this = $(this)
    index = $this.attr("data-nav")
    // li 样式
    $this.toggleClass('lis')
    // li > a 样式
    $($this[0].children[0]).toggleClass("aColor color"+index)
    // 导航框 显示
    $($sideNav[index]).css("display", "block")
  })

  $lis.on('mouseout', function () {
    var $this = $(this)
    index = $this.attr("data-nav")
    // li 样式
    $this.toggleClass("lis")
    // li > a 样式
    $($this[0].children[0]).toggleClass("aColor color"+index)
    // 导航框 隐藏
    $($sideNav[index]).css("display", "none")
  })

  $sideNav.on('mouseover', function () {
    // 导航框 显示
    $(this).css("display", "block")
    // li 样式
    $($lis[index]).toggleClass("lis")
    // li > a 样式
    $($lis[index].children[0]).toggleClass("aColor color"+index)
  })
  $sideNav.on('mouseout', function () {
    // 导航框 隐藏
    $(this).css("display", "none")
    // li 样式
    $($lis[index]).toggleClass("lis")
    // li > a 样式
    $($lis[index].children[0]).toggleClass("aColor color"+index)
  })
})