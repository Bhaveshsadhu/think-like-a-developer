function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginDiv = document.getElementById("login");
    const adminDashboard = document.getElementById("adminDashboard");
    const userDashboard = document.getElementById("userDashboard");
    const error = document.getElementById("error");

    error.innerText = "";

    if (username === "admin" && password === "admin123") {
        loginDiv.classList.add("hidden");
        adminDashboard.classList.remove("hidden");
    }
    else if (username === "user" && password === "user123") {
        loginDiv.classList.add("hidden");
        userDashboard.classList.remove("hidden");
    }
    else {
        error.innerText = "Invalid credentials";
    }
}

function logout() {
    const loginDiv = document.getElementById("login");
    const adminDashboard = document.getElementById("adminDashboard");
    const userDashboard = document.getElementById("userDashboard");

    // Hide dashboards
    adminDashboard.classList.add("hidden");
    userDashboard.classList.add("hidden");

    // Show login again
    loginDiv.classList.remove("hidden");

    // Clear inputs
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerText = "";
}
