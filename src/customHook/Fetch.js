import { useState, useEffect } from "react"

// custom hook to fetch data from API
export function Fetch(uri) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);

    return { loading, data, error }

}

