function Counter() {
    let count = 0;

    function increment() {
        count++;
        console.log("rendered but not update the UI, count =", count);

    }
    return (
        <>
            <h1>Without State</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default Counter;