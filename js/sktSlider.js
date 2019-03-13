/* 
    --------------------------------------------------------
                            sktSlider
    --------------------------------------------------------     
*/
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function(){	
	
	var get_height=$(window).height();
	$("#slider ul#pics li div:nth-child("+1+")").css({"height":get_height});

	var count=1;
	var speed=6000;	
	var li_length = $("#slider ul#pics li").length;

	function animate(){	

		$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").animo({ animation: 'fadeInLeftBig', duration: 1, keep:true}, function(){			
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").animo( { animation: 'fadeOutLeft delay3500ms', duration: 0.5, keep:true} );						
		});

		$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+1+")").animo({ animation: 'fadeInRightBig', duration: 0.5, keep:true}, function(){			
			$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+1+")").animo( { animation: 'fadeOutDown delay3500ms', duration: 1, keep:true} );						
		});

		$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+2+")").animo({ animation: 'fadeInRightBig delay05ms', duration: 0.5,  keep:true}, function(){			
			$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+2+")").animo( { animation: 'fadeOutDown delay2500ms', duration: 1,  keep:true} );						
		});
		
		$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+3+")").animo({ animation: 'fadeInRightBig delay1s', duration: 0.5,  keep:true}, function(){			
			$("#slider ul#pics li:nth-child("+count+") div p:nth-child("+3+")").animo( { animation: 'fadeOutDown delay1500ms', duration: 1,  keep:true} );						
		});	
	}

	animate();

	/*show next picture function*/ 
	$.next_pic = function(){
		$("#slider ul#buttons li").removeClass("active"); 
		$("#slider ul#pics li").hide(); 
		$("#slider ul#pics li div p").hide();
		$("#progress").hide();
		
		if(count > -1 && count < li_length){
			count++;
			$("#slider ul#buttons li:nth-child("+count+")").addClass("active");	
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").show();
			$("#slider ul#pics li:nth-child("+count+") div p").show();

			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+1+")").show();
			$("#slider ul#pics li:nth-child("+count+")").show();
			animate(); 			
			$("#progress").show();
		}
		else{
			count=1;
			$("#slider ul#buttons li:nth-child("+count+")").addClass("active");
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").show();	
			$("#slider ul#pics li:nth-child("+count+") div p").show();	
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+1+")").show();	
			$("#slider ul#pics li:nth-child("+count+")").show();
			animate();			
			$("#progress").show(); 
		}		
	}

	/*show prev picture function*/
	$.prev_pic = function(){		
		$("#slider ul#buttons li").removeClass("active"); 
		$("#slider ul#pics li").hide();
		$("#slider ul#pics li div p").hide();
		$("#progress").hide(); 
	
		if(count > 1 && count < li_length+1){
			count--;
			$("#slider ul#buttons li:nth-child("+count+")").addClass("active");
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").show(); 
			$("#slider ul#pics li:nth-child("+count+") div p").show();
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+1+")").show();		
			$("#slider ul#pics li:nth-child("+count+")").show();
			animate(); 	
			$("#progress").show();			
		}
		else{
			count=li_length;
			$("#slider ul#buttons li:nth-child("+count+")").addClass("active");
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").show(); 
			$("#slider ul#pics li:nth-child("+count+") div p").show();
			$("#slider ul#pics li:nth-child("+count+") div:nth-child("+1+")").show();		
			$("#slider ul#pics li:nth-child("+count+")").show();
			animate(); 	
			$("#progress").show(); 
		}		
	}
	
	/* start */
	var run = setInterval('$.next_pic()', speed);	
	$(".pause a").hide();	

	/*hover function*/
	$("#slider").hover(function(){
		clearInterval(run);
		$("#progress").hide();
		$(".pause a").show();
		
	}, function(){
		run = setInterval('$.next_pic()', speed);
		$("#slider ul#pics li:nth-child("+count+")").show();		
		$("#progress").show();
		$(".pause a").hide();
	});

	/*button section function*/
	$("#slider ul#buttons li:first").addClass("active"); 
	$("#slider ul#buttons li").click(function(){ 
		var indisNo = $(this).index()+1;
		count = indisNo; 

		$("#slider ul#buttons li").removeClass("active"); 
		$(this).addClass("active"); 
		$("#slider ul#pics li").hide(); 
		$("#slider ul#pics li:nth-child("+indisNo+")").show();
		$("#slider ul#pics li:nth-child("+count+") div:nth-child("+2+") div:nth-child("+1+") img").show();
		$("#slider ul#pics li:nth-child("+indisNo+") div p").show();
		/*$("#slider ul#pics li:nth-child("+count+") img").fadeIn();*/
		$("#slider ul#pics li:nth-child("+count+") div:nth-child("+1+")").show();			
		/*$("#progress").fadeIn();*/
		animate();		
		return false;
	});
	
	/*next button click function*/
	$(".next").click(function(){
		$.next_pic(); 
		$("#progress").hide();
		return false;
	}); 

	/*prev button click function*/
	$(".prev").click(function(){ 
		$.prev_pic(); 
		$("#progress").hide();
		return false;
	});

	$("ul#buttons li").hover(function(){    			
		$("ul#buttons li div.ucgen-ok").animo( { animation: 'fadeInDown', duration: 0.5, keep:false} );	
   	});

});
/* Slider Finish */	

$( window ).resize(function(){

	var get_height=$(window).height();
	$("#slider ul#pics li div:nth-child("+1+")").css({"height":get_height});			

});