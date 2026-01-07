
const Button = (props) => {
    function showMessage() {
        // alert("Hello from React!");
        alert(`Hellow from ${props.page} page!`);
    }
    return (
        <button onClick={showMessage}>Click Me</button>
    )
}

export default Button
