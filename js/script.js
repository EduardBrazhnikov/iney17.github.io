"use strict"
$(document).ready(function() { 
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5000;
var navBtnId = 0;
var translateWidth = 0;
$('.vkl1').click(function() {
   this.style.backgroundColor = '#32CD32';
   $('.order1').css('backgroundColor', '#32CD32');
   $('.vkl2').css('backgroundColor', '#fff');
   $('.vkl3').css('backgroundColor', '#fff');
   $('.vkl4').css('backgroundColor', '#fff');
   $('.order2').css('backgroundColor', '#1E90FF');
   $('.order3').css('backgroundColor', '#1E90FF');
   $('.order4').css('backgroundColor', '#1E90FF');
   $('.triangle-down1').css('display', 'block');
   $('.triangle-down2').css('display', 'none');
   $('.triangle-down3').css('display', 'none');
   $('.triangle-down4').css('display', 'none');
   var cost = 1199;
   var nameBox = 'NEW YEAR BOX';
   var descriptionBox = 'Тематические предметы внутри!Новогодние сладости, хлопушки, аксессуары для маскарада, конечно же крутые гаджеты и даже новогодний снег :) !';
   $('#price').html('цена: ' + cost + ' грн');
   $('#nameBox').html(nameBox);
   $('.descriptionBox').html(descriptionBox);
})
$('.vkl2').click(function() {
   this.style.backgroundColor = '#32CD32';
   $('.order2').css('backgroundColor', '#32CD32');
   $('.vkl1').css('backgroundColor', '#fff');
   $('.vkl3').css('backgroundColor', '#fff');
   $('.vkl4').css('backgroundColor', '#fff');
   $('.order1').css('backgroundColor', '#1E90FF');
   $('.order3').css('backgroundColor', '#1E90FF');
   $('.order4').css('backgroundColor', '#1E90FF');
   $('.triangle-down1').css('display', 'none');
   $('.triangle-down2').css('display', 'block');
   $('.triangle-down3').css('display', 'none');
   $('.triangle-down4').css('display', 'none');
   var cost = 1199;
   var nameBox = 'BLOGGER BOX';
   var descriptionBox = 'Внутри бокса полезные предметы для блогера (экшн камера, трипод, попсокет, селфи ринг и др.), а так же уникальный YouTube аксессуар!';
   $('#price').html('цена: ' + cost + ' грн');
   $('#nameBox').html(nameBox);
   $('.descriptionBox').html(descriptionBox);
})
$('.vkl3').click(function() {
   this.style.backgroundColor = '#32CD32';
   $('.order3').css('backgroundColor', '#32CD32');
   $('.vkl2').css('backgroundColor', '#fff');
   $('.vkl1').css('backgroundColor', '#fff');
   $('.vkl4').css('backgroundColor', '#fff');
   $('.order2').css('backgroundColor', '#1E90FF');
   $('.order1').css('backgroundColor', '#1E90FF');
   $('.order4').css('backgroundColor', '#1E90FF');
   $('.triangle-down1').css('display', 'none');
   $('.triangle-down2').css('display', 'none');
   $('.triangle-down3').css('display', 'block');
   $('.triangle-down4').css('display', 'none');
   var cost = 799;
   var nameBox = 'SCHOOL BOX';
   var descriptionBox = 'Крутые школьные предметы внутри! Рюкзаки, пеналы, канцелярия! А так же крутой гаджет!';
   $('#price').html('цена: ' + cost + ' грн');
   $('#nameBox').html(nameBox);
   $('.descriptionBox').html(descriptionBox);
})
$('.vkl4').click(function() {
   this.style.backgroundColor = '#32CD32';
   $('.order4').css('backgroundColor', '#32CD32');
   $('.vkl2').css('backgroundColor', '#fff');
   $('.vkl3').css('backgroundColor', '#fff');
   $('.vkl1').css('backgroundColor', '#fff');
   $('.order2').css('backgroundColor', '#1E90FF');
   $('.order3').css('backgroundColor', '#1E90FF');
   $('.order1').css('backgroundColor', '#1E90FF');
   $('.triangle-down1').css('display', 'none');
   $('.triangle-down2').css('display', 'none');
   $('.triangle-down3').css('display', 'none');
   $('.triangle-down4').css('display', 'block');
   var cost = 1119;
   var nameBox = 'WOMEN BOX';
   var descriptionBox = 'Серия исключительно для девушек!Внутри можно обнаружить бьюти принадлежности, немного косметики и другие милые штучки :)';
   $('#price').html('цена: ' + cost + ' грн');
   $('#nameBox').html(nameBox);
   $('.descriptionBox').html(descriptionBox);
})
 $("input#public").change(function(){
    if ($(this).prop('checked')) {
		$('#hide').fadeIn(300);
    } else {
        $('#hide').fadeOut().show(); 
        }
});
/*Мобильное меню*/
$('.butM').click(function(e) {
    var $Mnavigation = $('.Mnavigation');
    if ($Mnavigation.css('display') != 'block') {
        $Mnavigation.show("slow");
		$('body').css('margin-left', '50%');
		$('body').css('width', '150%');
		$('body').css('overflow-x', 'hidden');
		$('body').css('transition', '1.2s');
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.Mnavigation').length == 0) {
                $Mnavigation.hide("slow");
				$('body').css('margin-left', '0');
				$('body').css('width', '100%');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
    e.preventDefault();
});
/*Слайдер*/
var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}		
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}


});