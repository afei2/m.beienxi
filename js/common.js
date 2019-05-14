$(".qxcp").click(function(){
    $(this).toggleClass("open")
    $(".qxcp em").toggle()
    $(".qxcp i").toggle()
    $(".qxcp div").stop().slideToggle()
})

$(".wechat").click(function(event){
    $(".wechatqr").stop().fadeToggle()
    $(document).one("click",function() { //对document绑定一个影藏Div方法
        $(".wechatqr").hide();
    })
        event.stopPropagation(); //阻止事件向上冒泡
});
$(".wechatqr").click(function(event) {
    event.stopPropagation(); //阻止事件向上冒泡
});



$(".weibo").click(function(event){
    $(".weiboqr").stop().fadeToggle()
    $(document).one("click",function() { //对document绑定一个影藏Div方法
        $(".weiboqr").hide();
    })
        event.stopPropagation(); //阻止事件向上冒泡
});
$(".weiboqr").click(function(event) {
    event.stopPropagation(); //阻止事件向上冒泡
});