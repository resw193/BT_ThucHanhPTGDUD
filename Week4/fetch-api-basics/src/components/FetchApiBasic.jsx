import React, { useState, useEffect } from 'react';

function FetchApiBasic() {
    const [data, setData] = useState([]);
    var url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        async function fetchdata() {
            try {
                var res = await fetch(url);
                var data = await res.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error(error.message);
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

export default FetchApiBasic;
