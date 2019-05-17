$(".qxcp").click(function(){
    $(this).toggleClass("open")
    $(".qxcp em").toggle()
    $(".qxcp i").toggle()
    $(".qxcp div").stop().slideToggle()
})

//底部微信
$(".wechat").click(function(event){
    $(".wechatqr").stop().fadeToggle();
    $(".weiboqr").stop().hide()
    $(document).one("click",function() { //对document绑定一个影藏Div方法
        $(".wechatqr").hide();
    })
        event.stopPropagation(); //阻止事件向上冒泡
});
$(".wechatqr").click(function(event) {
    event.stopPropagation(); //阻止事件向上冒泡
});


//底部微博
$(".weibo").click(function(event){
    $(".weiboqr").stop().fadeToggle();
    $(".wechatqr").stop().hide();
    $(document).one("click",function() { //对document绑定一个影藏Div方法
        $(".weiboqr").hide();
    })
        event.stopPropagation(); //阻止事件向上冒泡
});
$(".weiboqr").click(function(event) {
    event.stopPropagation(); //阻止事件向上冒泡
});


//弹窗
// $(".tan b").click(function(event){
//     $(".tanc").stop().show()
//     $(document).one("click",function() { //对document绑定一个影藏Div方法
//         $(".tanc").hide();
//     })
//         event.stopPropagation(); //阻止事件向上冒泡
// });
// $(".tanc").click(function(event) {
//     event.stopPropagation(); //阻止事件向上冒泡
// });

$(".tan b").click(function(){
    $(".tanc").show()
});
$(".close").click(function(){
    $(".tanc").hide()
})