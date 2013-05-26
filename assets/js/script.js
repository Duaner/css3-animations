/* ------------------------ */
/* -- Globales variables -- */
/* ------------------------ */

var sec = '<span class="sec">s</span>';

/* ------------------------ */
/* -- Functions ----------- */
/* ------------------------ */

/* ----
-- Onload function
---- */

function defautAnim() {
	var durationVal = $('.animBille').css('-webkit-animation-duration');
	var durationLen = durationVal.length;
	var durationTime = durationVal.substr(0, durationLen - 1);
	var timingVal = $('.animBille').css('-webkit-animation-timing-function');
	var delayVal = $('.animBille').css('-webkit-animation-delay');
	var iterationVal = $('.animBille').css('-webkit-animation-iteration-count');
	var directionVal = $('.animBille').css('-webkit-animation-direction');
	var fillVal = $('.animBille').css('-webkit-animation-fill-mode');

	// Hide some elements
	if ( $('div').hasClass('active-parameter') ) {
		$('.active-parameter').find('.close').show();
	};

	// Set the value of the duration
	$('.duration-val').html(durationTime + sec);
	$('#durationInput').prop('value', durationTime);

	// Set others parameters
	$('#ease').prop('checked', 'checked');
	$('#infinite').prop('checked', 'checked');
	$('#direction-alternate').prop('checked', 'checked');

	// Write the property
	output(durationVal, timingVal, delayVal, iterationVal, directionVal, fillVal);
};

function output(durationVal, timingVal, delayVal, iterationVal, directionVal, fillVal) {
	var classAnim = '<span class="classAnim">.animBille</span><span class="animTag"> { </span>';
	var animProp = '<span class="animProp">animation</span><span class="animTag">: </span>';
	var animName = '<span class="animName">animBille</span> ';
	//var propOut = '<span class="dynamic"></span>';
	//var propIn = '';
	var space = ' ';
	var closeTag = '<span class="animTag">; }</span>';

	/* console.log( durationVal );
	console.log( timingVal );
	console.log( delayVal );
	console.log( iterationVal );
	console.log( directionVal );
	console.log( fillVal ); */

	if ( ( durationVal && timingVal && delayVal && iterationVal && directionVal && fillVal ) !== 'undefined' ) {

		if ( delayVal == '0s' && fillVal == 'none' )  {
			$('.code-output').find('code').html( classAnim + animProp + animName + durationVal + space + timingVal + space + iterationVal + space + directionVal + closeTag );
		} else {
			$('.code-output').find('code').html( classAnim + animProp + animName + durationVal + space + timingVal + space + delayVal + space + iterationVal + space + directionVal + space + fillVal + closeTag );
		}
	};
};




/* -- Duration -- */


/* -- Timing -- */



/* -- Delay -- */



/* -- Iteration -- */


/* -- Direction -- */

/*function closeProp() {

	var 

	if (  )

};*/


/* ------------------------ */
/* -- Event listener ------ */
/* ------------------------ */

(function($) {

	// Onload
	defautAnim();

	// Duration
	$('#durationInput').on('change', function() {
		var durationVal = $(this).val();

		// Active state
		$(this).parent().addClass('active-parameter');

		// Add this val to the ouput span
		$('.duration-val').html(durationVal + sec);

		console.log( durationVal );

		output(durationVal);
	});

	// Timing function
	$('#timing').find('input').on('change', function() {
		var timingVal = $(this).val();

		// Active state
		$(this).parents('#timing').addClass('active-parameter');

		console.log( timingVal );

		output(timingVal);
	});

	// Delay
	$('#delay').find('#delay-on').on('change', function() {

		$('#delayInput').on('change', function() {
			var delayVal = $(this).val();

			// Add this val to the output span
			$('.delay-val').html(delayVal + sec);	
		})

		// Active state
		$(this).parents('#delay').addClass('active-parameter');

		if ( $(this).is(':checked') ) {
			$(this).parents('#delay').find('.close').fadeIn();
			$(this).parent().fadeOut('fast', function() {
				$(this).parent().find('.hidden').fadeIn();
			});
		};
	});

	// Iteration count
	$('#iteration').find('input').on('change', function() {
		var iterationVal = $(this).val();

		// Active state
		$(this).parents('#iteration').addClass('active-parameter');

		console.log( iterationVal );
	});

	// Direction
	$('#direction').find('input').on('change', function() {


		// Active state
		$(this).parents('#direction').addClass('active-parameter');

	});

	// Fill mode
	$('#fill').find('input').on('change', function() {


		// Active state
		$(this).parents('#fill').addClass('active-parameter');


	});

	// Remove parameters
	$('.close').on('click', function() {
		var animationParameter = $(this).parent().prop('id');
		var $this = $(this).parents('#' + animationParameter);
		var activeParameter = $(this).parents().hasClass('active-parameter');
		var disableParameter = $this.removeClass('active-parameter');

		if ( animationParameter == 'timing' && activeParameter ) {
			disableParameter;

		} else if ( animationParameter == 'delay' && activeParameter ) {
			// Remove active class
			disableParameter;

			// Hide close button
			$this.find('.close').fadeOut();

			// Hide input & show checkbox
			$this.find('.hidden').fadeOut('fast', function() {
				$this.find('.checkbox').fadeIn();
				$this.find('.checkbox').prop('checked', false);
			});
		} else if ( animationParameter == 'iteration' && activeParameter ) {

		} else if ( animationParameter == 'direction' && activeParameter ) {

		} else if ( animationParameter == 'fill' && activeParameter ) {

		};
	});



















})(jQuery);