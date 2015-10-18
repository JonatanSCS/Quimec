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
});


