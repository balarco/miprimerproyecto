import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <button className="button" onClick={decrement}>-</button>
            <span className="text">{count}</span>
            <button className="button" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;