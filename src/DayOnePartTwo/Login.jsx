function Login({ setRole }) {
    function handleLogin(username, password) {
        if (username === "admin" && password === "admin123") {
            setRole("admin");
        }
        else if (username === "user" && password === "user123") {
            setRole("user");
        }
        else {
            alert("Invalid credentials");
        }
    }

    return (
        <div>
            <h2>Login</h2>

            <input placeholder="Username" id="username" />
            <input placeholder="Password" type="password" id="password" />

            <button
                onClick={() =>
                    handleLogin(
                        document.getElementById("username").value,
                        document.getElementById("password").value
                    )
                }
            >
                Login
            </button>
        </div>
    );
}

export default Login;
