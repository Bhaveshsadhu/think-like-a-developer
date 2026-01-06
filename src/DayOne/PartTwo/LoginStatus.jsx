import React from 'react';

function LoginStatus() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <>
            <h2>Login</h2>
            <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
            <button onClick={() => setLoggedIn(!loggedIn)}>
                Toggle Login
            </button>
        </>
    );
}
export default LoginStatus;