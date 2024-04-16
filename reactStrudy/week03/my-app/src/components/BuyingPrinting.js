import React, { useState, useEffect } from "react";

const BuyingPrinting = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/buying');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();

        // Cleanup function (if needed)
        return () => {
            // Perform any cleanup here (if needed)
        };
    }, []); // Empty dependency array to run effect only once

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Render the data
    return (
        <div>
            {/* Example: Rendering data as a list */}
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.price} {item.p_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BuyingPrinting;