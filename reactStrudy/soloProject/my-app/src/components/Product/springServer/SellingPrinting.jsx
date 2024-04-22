import React, { useState, useEffect } from "react";

const SellingPrinting = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newBuying, setNewBuying] = useState({
        price: '',
        p_name: ''
    });

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/selling');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBuying({ ...newBuying, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/selling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBuying)
            });
            if (!response.ok) {
                throw new Error('Failed to add new buying');
            }
            // Refresh data after successful addition
            await fetchData();
            // Clear the form fields
            setNewBuying({ price: '', p_name: '' });
        } catch (error) {
            setError(error);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Render the data
    return (
        <div className="container">
            {/* Add form for new buying */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={newBuying.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    name="p_name"
                    value={newBuying.p_name}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Selling</button>
            </form>

            {/* Example: Rendering data as a list */}
            <table className="table">
                <thead>
                    <td>id</td>
                    <td>price</td>
                    <td>p_name</td>
                </thead>
                <tbody>
                    {
                        Array.isArray(data) && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.p_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SellingPrinting;