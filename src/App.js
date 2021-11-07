import React from 'react'
import UseState from './useState/UseState'
import UseEffect from './useEffect/UseEffect';
import UseReducer from './useReducer/UseReducer';
// import CustomHook from './customHook/UseFetch'

function App() {
  return (
    <div>
      <h1>Hooks lesson</h1>
      <UseState />
      <UseEffect />
      <UseReducer />
    </div>
  );
}

export default App;
