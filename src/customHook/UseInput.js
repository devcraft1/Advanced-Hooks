import React, { useState } from 'react';


const UseInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return [
        {
            value,
            onchange: (e) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ]

}


