$(document).ready(function(){

	$(window).scroll(function(){
		var s_top = $(window).scrollTop();

		if(s_top>100){
			$('#go_top').fadeIn(500);
		}
		else{
			$('#go_top').fadeOut(500);
		}
	});
	
	$('#go_top').click(function(){
		$('body').animate({scrollTop:0},"slow");
	});	
});