$(document).ready(function(){
	/* 상단메뉴 */
	$(".menu_box .dep2").hide();
    $(".menu").hover(function() {
        $(".menu_box .menu ul").stop().slideToggle();
    });
	
	/* 출판 그룹 */
	$('.press_group button').on('click', function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('div').stop().slideUp();
		}else{
			$(this).addClass('on').next('div').stop().slideDown();
		};
		return false;
	});
});
