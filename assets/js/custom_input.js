// Custom checkbox and radios
function setupLabel() {
    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if ($(checkBoxInput).length) {
        $(checkBox).each(function(){
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function(){
            $(this).parent(checkBox).addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function(){
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function(){
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function(){
            $(this).parent(radio).addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function(){
            $(this).parent(radio).addClass(radioDisabled);
        });
    };
};

// Custom toggle buttons
var toggleHandler = function(toggle) {
    var toggle = toggle;
    var radio = $(toggle).find('input');

    var checkToggleState = function() {
        if (radio.eq(0).is(':checked')) {
            $(toggle).removeClass('toggle-off');
        } else {
            $(toggle).addClass('toggle-off');
        }
    };

    checkToggleState();

    radio.eq(0).click(function() {
        $(toggle).toggleClass('toggle-off');
    });

    radio.eq(1).click(function() {
        $(toggle).toggleClass('toggle-off');
    });
};

$(document).ready(function(){
    // $('html').addClass('js');

    // First let's prepend icons (needed for effects)
    $('.radio').prepend('<span class="icon r-100"></span><span class="icon-to-fade r-100"></span>');
    $('.checkbox').prepend('<span class="icon r-4"></span><span class="icon-to-fade r-4"></span>');

    $(".checkbox, .radio").click(function(){
        setupLabel();
    });
    setupLabel();

    $('.toggle').each(function(index, toggle) {
        toggleHandler(toggle);
    });
});