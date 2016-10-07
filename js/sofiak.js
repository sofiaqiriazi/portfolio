$(function () {
    $('.tlt').textillate({
    	loop:true,
    	in: {
    		effect: 'fadeIn',
		    delayScale: 2.0,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	},
    	out: {
    		effect: 'fadeOutRight',
		    delayScale: 8.0,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	}
    });

})

