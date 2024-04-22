import React, { useState, useEffect } from "react";

const DealingPrinting = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newDealing, setNewDealing] = useState({
        price: '',
        p_name: '',
        sellerId : '',
        buyerId : '',
        trackingNumber : '',
    });

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/dealing');
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
        setNewDealing({ ...newDealing, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/dealing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDealing)
            });
            if (!response.ok) {
                throw new Error('Failed to add new buying');
            }
            // Refresh data after successful addition
            await fetchData();
            // Clear the form fields
            setNewDealing({ price: '', p_name: '' });
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
                    value={newDealing.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    name="p_name"
                    value={newDealing.p_name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="SellerID"
                    name="sellerId"
                    value={newDealing.sellerId}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="BuyerId"
                    name="buyerId"
                    value={newDealing.buyerId}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Tracking Number"
                    name="trackingNumber"
                    value={newDealing.trackingNumber}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Dealing</button>
            </form>

            {/* Example: Rendering data as a list */}
            <table className="table">
                <thead>
                    <td>id</td>
                    <td>price</td>
                    <td>p_name</td>
                    <td>sellerId</td>
                    <td>buyerId</td>
                    <td>trackingNumber</td>
                </thead>
                <tbody>
                    {
                        Array.isArray(data) && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.p_name}</td>
                                <td>{item.sellerId}</td>
                                <td>{item.buyerId}</td>
                                <td>{item.trackingNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DealingPrinting;