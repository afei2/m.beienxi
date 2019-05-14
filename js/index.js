var mySwiper = new Swiper('.swiper_01', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
    pagination :{
        el: '.swiper_01 .swiper-pagination',
        clickable :true,
    }
})
var mySwiper = new Swiper('.swiper_02', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
    pagination :{
        el: '.swiper_02 .swiper-pagination',
        clickable :true,
    }
})
var mySwiper = new Swiper('.swiper_03', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
    pagination :{
        el: '.swiper_03 .swiper-pagination',
        clickable :true,
    }
})
var galleryThumbs = new Swiper('.swiper_04 .gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.swiper_04 .gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 3, //looped slides should be the same
    navigation: {
        nextEl: '.swiper_04 .swiper-button-next',
        prevEl: '.swiper_04 .swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

var galleryThumbs = new Swiper('.swiper_05 .gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    direction: 'vertical',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.swiper_05 .gallery-top', {
    direction: 'vertical',
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs
    }
});
$('.xiny').click(function () {
    $('.xiny div').fadeToggle();
    $(".xiny b").fadeToggle();
    $(this).siblings().children("div").fadeOut();
    $(this).siblings().children("b").fadeIn();
})
$('.OETE').click(function () {
    $('.OETE div').fadeToggle();
    $(".OETE b").fadeToggle();
    $(this).siblings().children("div").fadeOut();
    $(this).siblings().children("b").fadeIn();
})
$('.Paerata').click(function () {
    $('.Paerata div').fadeToggle();
    $(".Paerata b").fadeToggle();
    $(this).siblings().children("div").fadeOut();
    $(this).siblings().children("b").fadeIn();
})
var app = new Vue({
	el: "#app",
    data: {
		cur:0 //默认选中第一个tab
	}
});   