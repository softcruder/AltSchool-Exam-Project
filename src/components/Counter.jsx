import { useState } from 'react';

function Counter({ initialState }) {
  const [count, useCount] = useState(0);

  return (
    <div className="Counter">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count === 0)}>>
        Reset
      </button>
      <div className="set-value">
        <input type="number">
        <button onClick={() => setCount(count + 1)}>>
        Set Count
        </button>
      </div>
      
    </div>

  );
}

export default Counter;
