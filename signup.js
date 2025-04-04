const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const fullnameError = document.getElementById('fullname_error');
const emailError = document.getElementById('email_error');
const usernameError = document.getElementById('username_error');
const passError = document.getElementById('pass_error');
const confirmPassError = document.getElementById('confirm_pass_error');
const loadingIndicator = document.getElementById('loading');
const signupButton = document.querySelector('.signup-btn');

function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        document.querySelector('.toggle-password').textContent = "Hide";
    } else {
        passwordInput.type = "password";
        document.querySelector('.toggle-password').textContent = "Show";
    }
}

function validateFullname() {
    const fullname = fullnameInput.value.trim();
    
    if (fullname === '') {
        fullnameError.textContent = "Full name is required";
        return false;
    } else if (fullname.length < 3) {
        fullnameError.textContent = "Full name must be at least 3 characters";
        return false;
    } else {
        fullnameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        emailError.textContent = "Email is required";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validateUsername() {
    const username = usernameInput.value.trim();
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    
    if (username === '') {
        usernameError.textContent = "Username is required";
        return false;
    } else if (!usernameRegex.test(username)) {
        usernameError.textContent = "Username must be 4-20 characters and contain only letters, numbers, and underscores";
        return false;
    } else {
        usernameError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    if (password === '') {
        passError.textContent = "Password is required";
        return false;
    } else if (password.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        return false;
    } else if (!passwordRegex.test(password)) {
        passError.textContent = "Password must include at least one number and one special character";
        return false;
    } else {
        passError.textContent = "";
        return true;
    }
}

function validatePasswordConfirmation() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword === '') {
        confirmPassError.textContent = "Please confirm your password";
        return false;
    } else if (password !== confirmPassword) {
        confirmPassError.textContent = "Passwords do not match";
        return false;
    } else {
        confirmPassError.textContent = "";
        return true;
    }
}

fullnameInput.addEventListener('input', validateFullname);
emailInput.addEventListener('input', validateEmail);
usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePasswordConfirmation);

function handleSignup() {
    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmationValid = validatePasswordConfirmation();
    
    if (isFullnameValid && isEmailValid && isUsernameValid && isPasswordValid && isPasswordConfirmationValid) {
        signupButton.disabled = true;
        loadingIndicator.style.display = 'block';
        
        setTimeout(() => {
            const userData = {
                fullname: fullnameInput.value.trim(),
                email: emailInput.value.trim(),
                username: usernameInput.value.trim(),
                password: passwordInput.value
            };
            
            console.log("User data to send:", userData);
            
            alert("Account created successfully! Please proceed with Payment.");
            window.location.href = "payments.html";
            

            signupButton.disabled = false;
            loadingIndicator.style.display = 'none';
        }, 2000); 
    }
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSignup();
    }
});