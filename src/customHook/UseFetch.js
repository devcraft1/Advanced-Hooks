import { useState, useEffect } from "react"


// custom hook to fetch data from API
function UseFetch(uri) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if (!uri) return
        fetch(uri)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    })
    return { loading, data, error }

}

// consumes data from usefetch custom API 
function UseFetchedData() {
    const [loading, data, error] = UseFetch(`https://api.github.com/users`)
    if (loading) return <p>loading...</p>
    if (error) return (
        <pre>
            {JSON.stringify(error, null, 2)}
        </pre>
    )
    return (
        <div>
            <img src={data.avatar_url} alt={data.login} />
        </div>)

}

export default UseFetchedData