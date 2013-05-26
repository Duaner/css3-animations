/* -- Default value -- */
var durationDef = $('.bille').css('animation-duration'),
	timingDef = $('.bille').css('animation-timing-function'),
	delayDef = $('.bille').css('animation-delay'),
	iterationDef = $('.bille').css('animation-iteration-count'),
	directionDef = $('.bille').css('animation-direction');

// duration
var durationLength = durationDef.length,
	durationFin = durationDef.substr(0, durationLength - 1);

$('.anim').append(' <span class="duration"></span>');
$('.duration').html( durationDef );
$('#durationValue').html( durationDef );
$('#durationInput').prop('value', durationFin);

// timing
$('.anim').append(' <span class="timing"></span>');
$('.timing').html( timingDef );

// delay
if ( delayDef !== '0s' ) {
	$('.anim').append(' <span class="delay"></span>');
	$('.delay').html( delayDef );
}

// iteration
$('.anim').append(' <span class="iteration"></span>');
$('.iteration').html( iterationDef );

// direction
$('.anim').append('<span class="direction"></span>');
$('direction').html( directionDef );




/* -- Duration -- */
$('#durationInput').on('change', function() {
	var durationValue = this.value;

	$('.animBille').css('-webkit-animation-duration', durationValue + 's');
	
	$('#durationValue').html(durationValue + 's');

	// Output code
	$('.duration').html(durationValue + 's');
});




/* -- Timing function -- */
 $('#timing').find('input').on('change', function() {

	var timing = $('input:checked').val();

	console.log( timing );

	$('.animBille').css('-webkit-animation-timing-function', timing + '!important');

	$('.timing').html( timing );
}); 




/* -- Iteration -- */
$('#infinite').on('change', function() {
	var iteration = $(this).value;

	// Animation
	$('.animBille').css('-webkit-animation-iteration-count', iteration);

	// Output code
	$('.iteration').html( iteration );
});

$('#iteration-on').on('change', function() {
	$(this).parent().find('#iteration-count').on('keyup', function() {

		var iteration = $(this).val();

		console.log( typeof iteration == 'number' );
		console.log( /^\d+$/.test(iteration) );

		// Animation
		$('.animBille').css('-webkit-animation-iteration-count', iteration);

		// Output code
		$('.iteration').html( iteration );
	});
});
