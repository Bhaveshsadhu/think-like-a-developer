import React from 'react';

function CounterState() {
    const [count, setCount] = React.useState(0);
    console.log("rendered with state, count =", count);

    function increment() {
        setCount(count + 1);

    }
    return (
        <>
            <h1>With State</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default CounterState;
