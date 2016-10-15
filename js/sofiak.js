$(function () {
    $('.tlt').textillate({
    	loop:true,
    	in: {
    		effect: 'fadeIn',
		    delayScale: 5.0,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	},
    	out: {
    		effect: 'fadeOutRight',
		    delayScale: 5.0,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	}
    });

})

