import React, { useState } from 'react'

function Lesson1() {
    const [start, end] = useState('kicks off')
    return (
        <div>
            <h3> Lesson 1 {start} </h3>
            <button onClick={() => end('ended')}>click to end lesson1</button>
        </div>
    );
}

export default Lesson1;
