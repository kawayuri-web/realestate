$(function () {
    //ハンバーガーメニュー押下後の処理
    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(".hamburger-menu").toggleClass("active");
        $(".header-nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    })
    $(".header-nav-link").on("click", function () {
        $(".hamburger-menu").removeClass("active");
        $(".header-nav").removeClass("active");
        $("body").removeClass("no-scroll");
    })
    $(window).on("scroll", function () {
        //aboutセクションまでスクロールしたらheaderに色をつける
        const aboutTop = $("#about").offset().top - 50;

        if ($(window).scrollTop() >= aboutTop) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
        //fvまでスクロールしたらtopへ戻るボタン表示
        const fvBottom = $(".fv").offset().top + $(".fv").outerHeight();
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom >= fvBottom && !$("body").hasClass("modal-open")) {
            $(".page-top").addClass("show");
        } else {
            $(".page-top").removeClass("show");
        }
    });
    //モーダル表示
    function openModal(modal) {
        $(modal).addClass("modal-show");
        $("body").addClass("no-scroll modal-open");
        $(".page-top").removeClass("show");
    }
    $(".works-img1, .works-txt1").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(".modal1");
    })
    $(".works-img2, .works-txt2").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(".modal2");
    })
    $(".works-img3, .works-txt3").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(".modal3");
    })
    $(".works-img4, .works-txt4").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(".modal4");
    })
    
    //モーダルを閉じる
    $(".modal-close").on("click", function(){
        $(".works-modal").removeClass("modal-show");
        $("body").removeClass("no-scroll modal-open");
    });

    // モーダルの外側をクリックしたら閉じる
    $("body").on("click", function(e) {
        if ($(e.target).closest(".works-modal").length){
            return;
        }
        if ($("body").hasClass("modal-open")) {
            $(".works-modal").removeClass("modal-show");
            $("body").removeClass("no-scroll modal-open");
        }
    });
})
//swiper初期化＆詳細設定
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});