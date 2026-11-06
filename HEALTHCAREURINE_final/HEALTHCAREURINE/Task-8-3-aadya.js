document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        // 1. Mobile Number Validation
        const mobileInput = document.getElementById("mobile");
        const mobileVal = mobileInput ? mobileInput.value.trim() : "";

        if (!mobileVal) {
            showError("mobile", mobileInput, "Mobile number is required.");
            event.preventDefault();
        } else if (!/^\d+$/.test(mobileVal)) {
            showError("mobile", mobileInput, "Mobile number can only contain numeric digits.");
            event.preventDefault();
        } else if (mobileVal.length !== 10) {
            showError("mobile", mobileInput, "Mobile number must be exactly 10 digits long.");
            event.preventDefault();
        } else if (!/^[6-9]/.test(mobileVal)) {
            showError("mobile", mobileInput, "Mobile number must start with 6, 7, 8, or 9.");
            event.preventDefault();
        }

        // 2. Email Address Validation
        const emailInput = document.getElementById("email");
        const emailVal = emailInput ? emailInput.value.trim() : "";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailVal) {
            showError("email", emailInput, "Email address is required.");
            event.preventDefault();
        } else if (!emailRegex.test(emailVal)) {
            showError("email", emailInput, "Enter a valid email address format (e.g., example@domain.com).");
            event.preventDefault();
        }
    });
});