import { useState, FC } from 'react';
import { CounterProps } from "../types/counter";

const DEFAULT_VALUE = 5;

const Counter: FC<CounterProps> = ({ initialValue = DEFAULT_VALUE }) => {
    const [count, setCount] = useState<number>(initialValue);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(Math.floor(Math.random() * 100))}>Randomize</button>
        </div>
    );
};

export default Counter;
