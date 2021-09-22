import React, {useState} from 'react'

export default function Hooks() {

    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count+1);
    }

    return (
        <div className="card">
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
