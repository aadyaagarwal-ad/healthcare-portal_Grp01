document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        const today = new Date();
        today.setHours(23, 59, 59, 999);

        // 1. Gender Validation
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            const genderContainer = document.querySelector(".radio-group");
            showError("gender", genderContainer, "Please select a gender.");
            event.preventDefault();
        }

        // 2. Blood Group Validation
        const bloodInput = document.getElementById("blood_group");
        if (!bloodInput || !bloodInput.value) {
            showError("blood_group", bloodInput, "Please select a blood group.");
            event.preventDefault();
        }

        // 3. Department Validation
        const deptInput = document.getElementById("department");
        if (!deptInput || !deptInput.value) {
            showError("department", deptInput, "Please select a department.");
            event.preventDefault();
        }

        // 4. Date of Birth Validation (Required & Cannot be in the future)
        const dobInput = document.getElementById("dob");
        if (!dobInput || !dobInput.value) {
            showError("dob", dobInput, "Date of Birth is required.");
            event.preventDefault();
        } else {
            const dobDate = new Date(dobInput.value + "T00:00:00");
            if (dobDate > today) {
                showError("dob", dobInput, "Date of Birth cannot be in the future.");
                event.preventDefault();
            }
        }

        // 5. Registration Date Validation (Required & Cannot be in the future)
        const regDateInput = document.getElementById("registration_date");
        if (!regDateInput || !regDateInput.value) {
            showError("registration_date", regDateInput, "Registration date is required.");
            event.preventDefault();
        } else {
            const regDate = new Date(regDateInput.value + "T00:00:00");
            if (regDate > today) {
                showError("registration_date", regDateInput, "Registration date cannot be in the future.");
                event.preventDefault();
            }
        }
    });
});