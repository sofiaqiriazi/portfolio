$(function () {
    $('.tlt').textillate({
    	loop:true,
    	in: {
    		effect: 'fadeIn',
		    delayScale: 5.0,
		    delay: 30,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	},
    	out: {
    		effect: 'fadeOutRight',
		    delayScale: 5.0,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
    	}
    });

})

