$(function(){
    $(".hamburger").on("click", function(e){
        e.preventDefault();
        $(".hamburger-menu").toggleClass("active");
        $(".header-nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    })
    $(".header-nav-link").on("click", function(){
        $(".hamburger-menu").removeClass("active");
        $(".header-nav").removeClass("active");
        $("body").removeClass("no-scroll");
    })
})