import React from 'react'
import UseState from './useState/UseState'
import UseEffect from './useEffect/UseEffect';
import UseReducer from './useReducer/UseReducer';
import UseRef from './useRef/UseRef';

function App() {
  return (
    <div>
      <h1>Hooks lesson</h1>
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseRef />
    </div>
  );
}

export default App;
