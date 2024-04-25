'use client';

import { useEffect, useState } from "react";

const Fixtures = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2023&from=2024-04-25&to=2024-06-30", {
	        "method": "GET",
	        "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "b199a4155fb01d034531b8a3bb7ea758"
            }
        })
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}
export default Fixtures;