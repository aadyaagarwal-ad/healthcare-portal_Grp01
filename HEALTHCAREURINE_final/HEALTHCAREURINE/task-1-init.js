/**
 * Task 1: Form Initialization, Reset, and Shared jQuery Utility Functions
 */

// Global function to show inline jQuery error message and apply border styling
function showError(fieldId, $element, message) {
    $('#err-' + fieldId).text(message);
    if ($element && $element.length && !$element.hasClass('radio-group')) {
        $element.addClass('input-error');
    }
}

// Global function to clear all error messages and highlight classes using jQuery
function clearErrors() {
    $('.error-message').text('');
    $('.input-error').removeClass('input-error');
}

$(document).ready(function () {
    const $form = $('#registrationForm');

    // Clear existing error messages at start of submission
    $form.on('submit', function () {
        clearErrors();
    });

    // Clear error messages when Reset button is clicked
    $form.on('reset', function () {
        clearErrors();
    });
});

// Window load event to display submission status popups after validation listeners execute
$(window).on('load', function () {
    $('#registrationForm').on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            alert('Please fill all required details correctly before submitting!');
        } else {
            e.preventDefault();
            alert('Patient Registered Successfully!');
            $('#registrationForm')[0].reset();
            clearErrors();
        }
    });
});