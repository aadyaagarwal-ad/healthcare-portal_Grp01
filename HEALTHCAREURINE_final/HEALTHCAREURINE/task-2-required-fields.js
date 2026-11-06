/**
 * Task 2: Validate Required Patient Information using jQuery
 */
$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        
        // 1. Patient Name Validation (Required, alphabetic & spaces only)
        const $nameInput = $('#patient_name');
        const nameVal = $.trim($nameInput.val());

        if (nameVal === '') {
            showError('patient_name', $nameInput, 'Patient Name is required.');
            e.preventDefault();
        } else if (!/^[a-zA-Z\s]+$/.test(nameVal)) {
            showError('patient_name', $nameInput, 'Patient Name must contain alphabetic characters and spaces only.');
            e.preventDefault();
        }

        // 2. Patient ID Validation (Required, pattern: PID-001)
        const $idInput = $('#patient_id');
        const idVal = $.trim($idInput.val());
        const pidRegex = /^PID-\d{3,}$/i;

        if (idVal === '') {
            showError('patient_id', $idInput, 'Patient ID is required.');
            e.preventDefault();
        } else if (!pidRegex.test(idVal)) {
            showError('patient_id', $idInput, 'Patient ID must follow format PID-001.');
            e.preventDefault();
        }

        // 3. Address Validation (Required)
        const $addressInput = $('#address');
        const addressVal = $.trim($addressInput.val());

        if (addressVal === '') {
            showError('address', $addressInput, 'Address is required.');
            e.preventDefault();
        }
    });
});