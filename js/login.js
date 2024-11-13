function login() {
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === registeredEmail && password === registeredPassword) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "http://127.0.0.1:5501/frontpage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
