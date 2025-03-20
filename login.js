document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const nameError = document.getElementById("name_error");
    const passError = document.getElementById("pass_error");
    const loading = document.getElementById("loading");
    const usernameRegex = /^[A-Za-z_]+$/;

    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let valid = true;

        if (username.value.trim() === "") {
            alert("Username is required");
            valid = false;
        } else if (!usernameRegex.test(username.value)) {
            nameError.textContent= "Username can only contain alphabets and underscores";
            valid = false;
        }

        if (password.value.length < 6) {
            passError.textContent = "Password must be at least 6 characters";
            valid = false;
        } else {
            passError.textContent = "";
        }

        if (valid) {
            loading.style.display = "flex";
            loading.style.justifyContent = "center";
            loading.style.alignItems = "center";
            setTimeout(() => {
                window.location.href = "dashboard_user.html";
            }, 2000);
        }
    });
});

function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleButton = document.querySelector(".toggle-password");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show";
    }
}
