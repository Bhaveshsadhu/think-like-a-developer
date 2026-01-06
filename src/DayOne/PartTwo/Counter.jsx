import React from 'react';
function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}


export default Counter;