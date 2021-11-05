import React, { useReducer } from 'react'

function UseReducerLesson2() {
    const [checked, toggle] = useReducer((checked) => !checked,
        false)
    return (
        <div>
            <h3>Lesson 2</h3>
            <input type='checkbox' onChange={toggle} />
            <p>{checked ? 'checked' : 'not checked'}</p>

        </div>
    );
}

export default UseReducerLesson2;
