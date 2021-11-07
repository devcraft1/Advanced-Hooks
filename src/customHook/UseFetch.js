import React from 'react'
import { Fetch } from './Fetch'

function UseFetch({ login }) {
    const { loading, data, error } = Fetch(`https://api.github.com/users/${login}`);
    if (loading) return <h1>loading...</h1>
    if (error) return (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    )
    return (

        <div>
            <h1>Use custom Hook</h1>
            <h3>Lesson 1</h3>
            {/* checkout fetched data */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <img src={data.avatar_url} alt={data.login} />
            <h3>{data.name}</h3>
        </div>
    )

}

export default UseFetch