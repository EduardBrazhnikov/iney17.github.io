"use strict"
$(document).ready(function() { 
	var phoneBlock = document.getElementById('overlay');
	var phoneBlock = document.getElementById('overlay');
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
   var cost = 299;
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
   var cost = 500;
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
   var cost = 999;
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
// $('.popup__close').click(function() {
    // phoneBlock.style.display = 'none';
// });
// $(window).scroll(function() {
// if($(this).scrollTop() != 0) {
// $('.topButton').fadeIn();
// } else {
// $('.topButton').fadeOut();
// }
// });
// $('.topButton').click(function() {
// $('body,html').animate({scrollTop:0},700);
// });
// $('a[href*="#contact"]').click(function() {
	// var h = $('#contact').offset();
	// $('body,html').animate({scrollTop:h.top},700);
// });	
// $('a[href*="#about"]').click(function() {
	// var h = $('#about').offset();
	// $('body,html').animate({scrollTop:h.top},700);
// });	
// $('#logBut').click(function(e) {
	// e.preventDefault();
	// sendTelephone();	
// });
// $('#button1').click(function(e) {
	// e.preventDefault();
	// sendCupcakes();	
// });
// $('#button2').click(function(e) {
	// e.preventDefault();
	// sendCake();	
// });
// $('#button3').click(function(e) {
	// e.preventDefault();
	// sendMacaroon();	
// });
// $('#button4').click(function(e) {
	// e.preventDefault();
	// sendBlueberry();
// });
// function sendTelephone() {
	// var data = $("#formMain").serialize();
	// jQuery.ajax({
                    // url: "send_email.php",
                    // type: "POST",
                    // dataType: "json",
                    // data: data, 
                    // success: function(data) {
					// $('#messegeResult').html('<p>' + data.text + '</p>');
                // },
                // error: function(data) {
                // $('#messegeResult').html('<p>Возникла ошибка. Попробуйте еще раз</p>');
                // }
             // });
// }
// function sendCupcakes() {
	// var data = $("#cupcakes").serialize();
	// jQuery.ajax({
                    // url: "send_email.php",
                    // type: "POST",
                    // dataType: "json",
                    // data: data, 
                    // success: function(data) {
						// $('#result1').html('<p>' + data.text1 + '</p>');
                // },
                // error: function(data) {
				// $('#result1').html('<p>Возникла ошибка. Попробуйте еще раз</p>');
                // }
             // });
// }
// function sendCake() {
	// var data = $("#cake").serialize();
	// jQuery.ajax({
                    // url: "send_email.php",
                    // type: "POST",
                    // dataType: "json",
                    // data: data, 
                    // success: function(data) {
						// $('#result2').html('<p>' + data.text2 + '</p>');
                // },
                // error: function(data) {
				// $('#result2').html('<p>Возникла ошибка. Попробуйте еще раз</p>');
                // }
             // });
// }
// function sendMacaroon() {
	// var data = $("#macaroon").serialize();
	// jQuery.ajax({
                    // url: "send_email.php",
                    // type: "POST",
                    // dataType: "json",
                    // data: data, 
                    // success: function(data) {
                        // $('#result3').html('<p>' + data.text3 + '</p>');
                // },
                // error: function(data) {
				// $('#result3').html('<p>Возникла ошибка. Попробуйте еще раз</p>');
                // }
             // });
// }
// function sendBlueberry() {
	// var data = $("#blueberry").serialize();
	// jQuery.ajax({
                    // url: "send_email.php",
                    // type: "POST",
                    // dataType: "json",
                    // data: data, 
                    // success: function(data) {
						// $('#result4').html('<p>' + data.text4 + '</p>');
                // },
                // error: function(data) {
				// $('#result4').html('<p>Возникла ошибка. Попробуйте еще раз</p>');
                // }
             // });
// }
});