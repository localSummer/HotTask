$(function(){
	/*js控制垂直居中*/
	$(window).load(function() {
		$('.text').eq(0).css('margin-top',($('.auto').eq(0).height()-$('.text').eq(0).height())/2 + 'px');
	});
	$(window).resize(function(){
		$('.text').eq(0).css('margin-top',($('.auto').eq(0).height()-$('.text').eq(0).height())/2 + 'px');
	});
	$(window).load(function(){
		$('.text').eq(1).css('margin-top',($('.auto').eq(1).height()-$('.text').eq(1).height())/2 + 'px');
	});
	$(window).resize(function(){
		$('.text').eq(1).css('margin-top',($('.auto').eq(1).height()-$('.text').eq(1).height())/2 + 'px');
	});
	$(window).load(function(){
		$('.text').eq(2).css('margin-top',($('.auto').eq(2).height()-$('.text').eq(2).height())/2 + 'px');
	});
	$(window).resize(function(){
		$('.text').eq(2).css('margin-top',($('.auto').eq(2).height()-$('.text').eq(2).height())/2 + 'px');
	});
	$(window).load(function(){
		$('.text').eq(3).css('margin-top',($('.auto').eq(3).height()-$('.text').eq(3).height())/2 + 'px');
	});
	$(window).resize(function(){
		$('.text').eq(3).css('margin-top',($('.auto').eq(3).height()-$('.text').eq(3).height())/2 + 'px');
	});
	$(window).load(function(){
		$('.text').eq(4).css('margin-top',($('.auto').eq(4).height()-$('.text').eq(4).height())/2 + 'px');
	});
	$(window).resize(function(){
		$('.text').eq(4).css('margin-top',($('.auto').eq(4).height()-$('.text').eq(4).height())/2 + 'px');
	});
});