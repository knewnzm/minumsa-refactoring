$(function() {
	//비주얼
	$visual = $(".visual");
	$visualList = $visual.children(".list_box");
	$visualSlide = $visualList.children('.item');
	$visualControl = $visual.children(".ctrl");
	$visualControl_prev = $visualControl.find(".prev");
	$visualControl_next = $visualControl.find(".next");
	$visualControl_pause = $visualControl.children(".btn_pause");
	$visualControl_play = $visualControl.children(".btn_play");

	$visualList.slick({
		autoplay: false,
		//autoplaySpeed: 4000,
		arrows: true,
		swipe : false,
		//fade: true,
		prevArrow: $visualControl_prev,
		nextArrow: $visualControl_next,
		pauseOnDotsHover: false
	});
	
	//정지버튼 눌렀을때
	$visualControl_pause.on('click', function() {
		$visualControl_pause.hide();
		$visualControl_play.show().focus();
		$visualList.slick('slickPause')
				  .slick('slickSetOption', 'pauseOnDotsHover', false);
	});
	//재생버튼 눌렀을때
	$visualControl_play.on('click', function() {
		$visualControl_pause.show().focus();
		$visualControl_play.hide();
		$visualList.slick('slickPlay')
				  .slick('slickSetOption', 'pauseOnDotsHover', true);
	});

});
