import React, { useState, useEffect } from 'react'

function UseEffectLesson1() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => response.json())
            .then(setData)
            .catch((e) => e)
    }, [])
    return (
        <div>
            <ul>
                {data.map((user) =>
                    <li key={user.id}>{user.login}</li>
                )}
            </ul>
            <button onClick={() => setData([])}>
                Clear data
            </button>
        </div>
    );
}

export default UseEffectLesson1

