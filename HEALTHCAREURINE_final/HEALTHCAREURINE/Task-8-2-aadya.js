document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        // 1. Patient Name Validation
        const nameInput = document.getElementById("patient_name");
        const nameVal = nameInput ? nameInput.value.trim() : "";
        if (!nameVal) {
            showError("patient_name", nameInput, "Patient Name is required.");
            event.preventDefault();
        } else if (!/^[a-zA-Z\s]+$/.test(nameVal)) {
            showError("patient_name", nameInput, "Patient Name cannot contain numbers or special characters.");
            event.preventDefault();
        }

        // 2. Address Validation
        const addressInput = document.getElementById("address");
        const addressVal = addressInput ? addressInput.value.trim() : "";
        if (!addressVal) {
            showError("address", addressInput, "Address is required.");
            event.preventDefault();
        }
    });
});