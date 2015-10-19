$(document).ready(function(){



	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '200px'
		}, 500);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){
			$('.ir-arriba').slideDown(300);

		} else {
			$('.ir-arriba').slideUp(300);

		}
	});

	$(".image-slide")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "over.gif";
            $(this).attr("src", src);
        });

	$('.bxslider').bxSlider({
  		auto: true
  		
	});


	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){
			$('.ir-arriba').slideDown(300);

		} else {
			$('.ir-arriba').slideUp(300);

		}
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$(".servicios-item").css("visibility", "visible");
			$(".servicios-item").css("transition", "opacity 2s");
			$(".servicios-item").css("opacity", "1");
			

		} 
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 1000 ){
			$(".projectos-imagenes-element").css("visibility", "visible");
			$(".projectos-imagenes-element").css("transition", "opacity 2s");
			$(".projectos-imagenes-element").css("opacity", "1");
			

		} 
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 1500 ){
			$(".trabajamos-info").css("visibility", "visible");
			$(".trabajamos-info").css("transition", "margin-left 2s");
			$(".trabajamos-info").css("margin-left", "20%");
			$(".trabajamos-info").css("transition", "opacity 2s");
			$(".trabajamos-info").css("opacity", "1");
			
		} 
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 1900 ){
			$(".proveedores-info").css("visibility", "visible");
			$(".proveedores-info").css("transition", "opacity 2s");
			$(".proveedores-info").css("opacity", "1");
			
		} 
	});	


});

