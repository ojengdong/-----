$(".inputbox label").focusin(function(){
    $(this).children('span').addClass('inputboxact');
});

$(".inputbox label").focusout(function(){
    $(this).children('span').removeClass('inputboxact');
});

$(".inputbox label").focusin(function(){
    $(this).children('.inputboxact').css('transform', 'transitionY(-10px)');
    $(this).children('.inputboxact').css('font-size', '10px');
});