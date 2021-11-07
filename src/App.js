import React from 'react'
import UseState from './useState/UseState'
import UseEffect from './useEffect/UseEffect';
import UseReducer from './useReducer/UseReducer';
import UseFetch from './customHook/UseFetch';

function App() {
  return (
    <div>
      <h1>Hooks lesson</h1>
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseFetch login='devcraft1' />
    </div>
  );
}

export default App;
