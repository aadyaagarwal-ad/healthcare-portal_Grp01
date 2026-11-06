/**
 * Task 4: Demographic Selections & Date Validation using jQuery
 */
$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        const today = new Date();
        today.setHours(23, 59, 59, 999);

        // 1. Gender Radio Selection Validation
        const $genderChecked = $('input[name="gender"]:checked');
        if ($genderChecked.length === 0) {
            showError('gender', $('.radio-group'), 'Please select a gender.');
            e.preventDefault();
        }

        // 2. Blood Group Dropdown Validation
        const $bloodInput = $('#blood_group');
        if (!$bloodInput.val()) {
            showError('blood_group', $bloodInput, 'Please select a blood group.');
            e.preventDefault();
        }

        // 3. Department Dropdown Validation
        const $deptInput = $('#department');
        if (!$deptInput.val()) {
            showError('department', $deptInput, 'Please select a department.');
            e.preventDefault();
        }

        // 4. Date of Birth Validation (Required & cannot be in the future)
        const $dobInput = $('#dob');
        const dobVal = $dobInput.val();
        if (!dobVal) {
            showError('dob', $dobInput, 'Date of Birth is required.');
            e.preventDefault();
        } else {
            const dobDate = new Date(dobVal + 'T00:00:00');
            if (dobDate > today) {
                showError('dob', $dobInput, 'Date of Birth cannot be in the future.');
                e.preventDefault();
            }
        }

        // 5. Appointment Date Validation (Required)
        const $apptInput = $('#appointment_date');
        const apptVal = $apptInput.val();
        if (!apptVal) {
            showError('appointment_date', $apptInput, 'Appointment date is required.');
            e.preventDefault();
        }
    });
});