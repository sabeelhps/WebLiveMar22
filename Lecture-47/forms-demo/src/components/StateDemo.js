import React,{useState} from 'react';

const StateDemo = () => {

    const [count, setCount] = useState(0);

    const cardClickHanlder = () => {
        setCount(count + 1);
    }

    return (
          <div>
            <h1>Count Is : {count}</h1>
            <button onClick={cardClickHanlder}>Increment Count </button>
          </div>
    )
}

export default StateDemo