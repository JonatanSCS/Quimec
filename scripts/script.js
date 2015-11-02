$(document).ready(function() {
    $(".ir-arriba").click(function() {
        $("body, html").animate({
            scrollTop: "200px"
        }, 500)
    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 210 ? $(".ir-arriba").slideDown(300) : $(".ir-arriba").slideUp(300)
    }), 
    $(".image-slide").mouseover(function() {
        var i = $(this).attr("src").match(/[^\.]+/) + "over.gif"
        $(this).attr("src", i)
    }), 
    $(".bxslider").bxSlider({
        auto: !0
    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 210 ? $(".ir-arriba").slideDown(300) : $(".ir-arriba").slideUp(300)

    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 400 && ($(".servicios-lista").css("visibility", "visible"), $(".servicios-lista").css("transition", "opacity 2s"), $(".servicios-lista").css("opacity", "1"),$(".servicios-lista").addClass("animated fadeInLeft"))
    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 1e3 && ($(".projectos-imagenes-element").css("visibility", "visible"), $(".projectos-imagenes-element").css("transition", "opacity 2s"), $(".projectos-imagenes-element").css("opacity", "1"))
    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 1500 && ($(".trabajamos-info").css("visibility", "visible"), $(".trabajamos-info").css("opacity", "1"),$(".trabajamos-info").addClass("animated fadeInRight"))
    }), 
    $(window).scroll(function() {
        $(this).scrollTop() > 2150 && ($(".proveedores-info").css("visibility", "visible"), $(".proveedores-info").css("opacity", "1"),$(".proveedores-info").addClass("animated fadeInLeft"))
    	
    }),
    $('.slider-clientes').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 300,
        slideMargin: 10
    });




})