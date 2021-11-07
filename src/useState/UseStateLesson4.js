import React, { useState } from 'react'

function UseStateLesson4() {
    const [sound, setSound] = useState('')
    const [color, setColor] = useState('#000000')

    const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`)
        setColor('#000000')
        setSound('')
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type='text'
                    value={sound}
                    placeholder='sound...'
                    onChange={(e) => {
                        setSound(e.target.value)
                    }}
                />

                <input type='color'
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value)
                    }}
                />
                <button>ADD</button>
            </form>
        </div>
    );
}

export default UseStateLesson4

