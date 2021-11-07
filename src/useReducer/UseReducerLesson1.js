import React, { useReducer } from 'react'

function UseReducerLesson1() {
    const [data, setData] = useReducer((initial, final) => {
        return initial + final
    }, 0)
    return (
        <div>
            <h3>Lesson 1</h3>
            <h1 >{data}</h1>
            <button onClick={() => setData(1)}>Click to add</button>
        </div>
    );
}

export default UseReducerLesson1;
