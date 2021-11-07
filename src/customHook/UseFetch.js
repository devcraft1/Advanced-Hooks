import React from 'react';
import { Fetch } from './Fetch';

function UseFetch({ login }) {
    const { loading, data, error } = Fetch('https://hn.algolia.com/api/v1/search?query=redux');
    if (loading) return <h1>loading...</h1>
    if (error) return (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    )
    return (
        <div>
            {/* test data  */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )

}

export default UseFetch