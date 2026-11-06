/**
 * Shared Error Display Function
 */
function showError(fieldId, element, message) {
    const errorSpan = document.getElementById("err-" + fieldId);
    if (errorSpan) {
        errorSpan.innerText = message;
    }
    if (element && element.tagName !== "TD") {
        element.classList.add("input-error");
    }
}

/**
 * Shared Error Reset Function
 */
function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.innerText = "");
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    // 1. Clears existing error states right as submit starts
    form.addEventListener("submit", function () {
        clearErrors();
    }, false);

    // 2. Clear errors when user clicks Reset button
    form.addEventListener("reset", function () {
        clearErrors();
    });
});

// Attached on window load to guarantee validation listeners (Tasks 2, 3, 4) execute first
window.addEventListener("load", function () {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        if (event.defaultPrevented) {
            // ERROR POPUP PROMPT
            alert("Please fill all required details correctly before submitting!");
        } else {
            // SUCCESS POPUP PROMPT
            alert("Patient Registered Successfully!");
            form.reset();
        }
    }, false);
});