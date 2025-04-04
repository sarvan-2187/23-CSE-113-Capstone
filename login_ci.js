document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const nameError = document.getElementById("name_error");
    const passError = document.getElementById("pass_error");
    const loading = document.getElementById("loading");
    const usernameRegex = /^[A-Za-z0-9_]+$/;  
    
    username.addEventListener("input", function() {
        nameError.textContent = "";
        username.style.borderBottom = "2px solid white";
    });
    
    password.addEventListener("input", function() {
        passError.textContent = "";
        password.style.borderBottom = "2px solid white";
    });
    
    function handleLogin(event) {
        if (event) event.preventDefault();
        let valid = true;
        
        if (username.value.trim() === "") {
            nameError.textContent = "Instructor ID is required";
            username.style.borderBottom = "2px solid #ff6b6b";
            valid = false;
        } else if (!usernameRegex.test(username.value)) {
            nameError.textContent = "Instructor ID can only contain letters, numbers, and underscores";
            username.style.borderBottom = "2px solid #ff6b6b";
            valid = false;
        } else {
            nameError.textContent = "";
            username.style.borderBottom = "2px solid white";
        }
        
        if (password.value.trim() === "") {
            passError.textContent = "Password is required";
            password.style.borderBottom = "2px solid #ff6b6b";
            valid = false;
        } else if (password.value.length < 6) {
            passError.textContent = "Password must be at least 6 characters";
            password.style.borderBottom = "2px solid #ff6b6b";
            valid = false;
        } else {
            passError.textContent = "";
            password.style.borderBottom = "2px solid white";
        }
        
        if (valid) {
            loginBtn.disabled = true;
            loading.style.display = "flex";
            loading.style.justifyContent = "center";
            loading.style.alignItems = "center";
            
            setTimeout(() => {
                window.location.href = "course_dashboard.html";
            }, 2000);
        }
    }
    
    loginBtn.addEventListener("click", handleLogin);
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
    
    window.handleLogin = handleLogin;
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