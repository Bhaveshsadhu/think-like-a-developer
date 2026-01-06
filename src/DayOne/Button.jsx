
const Button = (props) => {
    function showMessage() {
        // props.page = "Home"
        // alert("Hello from React!");
        alert(`Hello from ${props.page} page!`);
    }
    return (
        <button onClick={showMessage}>Click Me</button>
    )
}

export default Button