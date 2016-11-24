// JavaScript Document
$(function() {
		$('.gof').on('click', function() {
			$('.imagepreview').attr('src', "imgs/infogameoflife.png");
			$('#imagemodal').modal('show');   
		});	
		$('.bike').on('click', function() {
			$('.imagepreview').attr('src', "../imgs/infobike.png");
			$('#imagemodal').modal('show');   
		});	
});
