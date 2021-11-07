import React, { useState } from 'react';


export const Input = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return [
        {
            value,
            onchange: (e) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ]

}