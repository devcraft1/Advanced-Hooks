import React, { useState } from 'react'

function UseStateLesson2() {
    const [checked, setChecked] = useState(false)
    return (
        <div>
            <h3>Lesson 2</h3>
            <input type='checkbox' value={checked} onChange={() => setChecked((!checked))} />
            <p>{checked ? 'checked' : 'not checked'}</p>

        </div>
    );
}

export default UseStateLesson2;
