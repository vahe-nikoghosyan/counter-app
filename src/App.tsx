import React, { useState } from 'react';
import Counter from './components/Counter';
import {CounterType} from "./types/counter";

// Mocked backend function
const fetchInitialValue = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 500);
    });
};

const App: React.FC = () => {
    const [counters, setCounters] = useState<CounterType[]>([
        { id: 1, value: Math.floor(Math.random() * 100) },
    ]);

    const addCounter = async () => {
        const newCounterValue = await fetchInitialValue();
        setCounters([...counters, { id: counters.length + 1, value: newCounterValue }]);
    };

    return (
        <div>
            <h1>Dynamic Counters</h1>
            {counters.map((counter) => (
                <Counter key={counter.id} initialValue={counter.value} />
            ))}
            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
};

export default App;
