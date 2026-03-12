import React, { useState, useEffect } from 'react';

function FetchLoadingError() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        async function fetchdata() {
            try {
                setLoading(true);
                console.log("Loading...")
                const res = await fetch(url);

                // Error 400/500 --> Catch không bắt được lỗi
                if (!res.ok) {
                    throw new Error("Can't fetch data from server");
                }

                var data = await res.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log("error networking");
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchdata();

    }, [])

    

    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchLoadingError;