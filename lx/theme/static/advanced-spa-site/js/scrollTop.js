(function(){var special=$.event.special,uid1='D'+(+new Date()),uid2='D'+(+new Date()+1);special.scrollstart={setup:function(){var timer,handler=function(evt){var _self=this,_args=arguments;if(timer){clearTimeout(timer)}else{evt.type='scrollstart';$.event.handle.apply(_self,_args)}timer=setTimeout(function(){timer=null},special.scrollstop.latency)};$(this).bind('scroll',handler).data(uid1, handler)},teardown:function(){$(this).unbind('scroll',$(this).data(uid1))}};special.scrollstop={latency:300,setup:function(){var timer,handler=function(evt){var _self=this,_args=arguments;if(timer){clearTimeout(timer)}timer=setTimeout(function(){timer=null;evt.type='scrollstop';$.event.handle.apply(_self, _args)},special.scrollstop.latency)};$(this).bind('scroll',handler).data(uid2,handler)},teardown:function(){$(this).unbind('scroll',jQuery(this).data(uid2))}}})()
$(function(){
	$('div.top>a').click(function(e){$('html,body').animate({scrollTop:'0px'},800);return false})
	var default_values = {
	max_width:1174,
	scroll_to_top:100,
	margin_right_1:-577,
	margin_right_2:-470,
	bottom:128,
	min_width:parseInt($('body').css("min-width"),10)
	}
	function top(){
		if(($(window).width()<=default_values.max_width)&&($(window).width()>=default_values.min_width))$('div.top').stop().animate({marginRight:default_values.margin_right_2,bottom:default_values.bottom,right:'50%'})
		else if($(window).width()<=default_values.min_width)$('div.top').stop().css({marginRight:0,right:10,bottom:default_values.bottom})
		else $('div.top').stop().animate({marginRight:default_values.margin_right_1,right:'50%',bottom:default_values.bottom})
	}
	top()
	$(window).scroll(function(){if($(this).scrollTop()>default_values.scroll_to_top){$('div.top').fadeIn()}else{$('div.top').fadeOut()}})
	$(window).resize(function(){top()})
})