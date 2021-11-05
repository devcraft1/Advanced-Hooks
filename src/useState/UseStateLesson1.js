import React, { useState } from 'react'

function UseStateLesson1() {
    const [start, end] = useState('kicks off')
    return (
        <div>
            <h3> Lesson 1 {start} </h3>
            <button onClick={() => end('ended')}>click to end UseStatelesson1</button>
        </div>
    );
}

export default UseStateLesson1;
