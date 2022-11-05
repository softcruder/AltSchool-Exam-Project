import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        {
          return state.count + 1;
        }
        break;
      case 'decrement':
        {
          return state.count - 1;
        }
        break;
      case 'set':
        {
          console.log(state, action);
          return { ...state, count: action.payload };
        }
        break;
      case 'count':
        {
          console.log(state, action);
          return { ...state, value: action.payload };
        }
        break;
      default: {
        return state;
      }
    }
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          Increment
        </button>
        <div>{state.count}</div>
        <input
          type="number"
          value={state.value}
          onChange={(e) => {
            // console.log(e.target.value);
            dispatch({ type: 'count', payload: e.target.value });
          }}
        />
        <div className="card">
          <button
            onClick={() => {
              dispatch({ type: 'set', payload: state.value });
            }}
          >
            Set Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
