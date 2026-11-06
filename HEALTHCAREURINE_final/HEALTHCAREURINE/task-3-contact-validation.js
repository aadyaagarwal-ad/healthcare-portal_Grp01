/**
 * Task 3: Validate Mobile Number, Email and Emergency Contact using jQuery
 */
$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {

        // 1. Mobile Number Validation (10-digit Indian Mobile Number)
        const $mobileInput = $('#mobile');
        const mobileVal = $.trim($mobileInput.val());

        if (mobileVal === '') {
            showError('mobile', $mobileInput, 'Mobile number is required.');
            e.preventDefault();
        } else if (!/^\d+$/.test(mobileVal)) {
            showError('mobile', $mobileInput, 'Mobile number must contain digits only.');
            e.preventDefault();
        } else if (mobileVal.length !== 10) {
            showError('mobile', $mobileInput, 'Mobile number must be exactly 10 digits.');
            e.preventDefault();
        } else if (!/^[6-9]/.test(mobileVal)) {
            showError('mobile', $mobileInput, 'Mobile number must start with 6, 7, 8, or 9.');
            e.preventDefault();
        }

        // 2. Email Address Validation
        const $emailInput = $('#email');
        const emailVal = $.trim($emailInput.val());
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailVal === '') {
            showError('email', $emailInput, 'Email address is required.');
            e.preventDefault();
        } else if (!emailRegex.test(emailVal)) {
            showError('email', $emailInput, 'Enter a valid email address format (e.g., user@domain.com).');
            e.preventDefault();
        }

        // 3. Emergency Contact Validation (10-digit Indian Mobile Number)
        const $emgInput = $('#emergency_contact');
        const emgVal = $.trim($emgInput.val());

        if (emgVal === '') {
            showError('emergency_contact', $emgInput, 'Emergency contact is required.');
            e.preventDefault();
        } else if (!/^[6-9]\d{9}$/.test(emgVal)) {
            showError('emergency_contact', $emgInput, 'Enter a valid 10-digit emergency mobile number.');
            e.preventDefault();
        }
    });
});