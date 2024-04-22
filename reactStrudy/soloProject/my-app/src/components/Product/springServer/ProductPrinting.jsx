import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const ProductPrinting = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newProduct, setProduct] = useState({
        price: '',
        p_name: '',
        user : '',
        p_contents : ''
    });

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/product');
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
        setProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (!response.ok) {
                throw new Error('Failed to add new buying');
            }
            // Refresh data after successful addition
            await fetchData();
            // Clear the form fields
            setProduct({   price: '',
                p_name: '',
                user : '',
                p_contents : '' }
            );
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
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    name="p_name"
                    value={newProduct.p_name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="User Name"
                    name="user"
                    value={newProduct.user}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Contents"
                    name="p_contents"
                    value={newProduct.p_contents}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Product</button>
            </form>

            {/* Example: Rendering data as a list */}
            <table className="table">
                <thead>
                    <td>id</td>
                    <td>p_name</td>
                    <td>price</td>
                    <td>user</td>
                </thead>
                <tbody>
                    {
                        Array.isArray(data) && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <Link to = {`/product/${item.id}`}><td>{item.p_name}</td></Link>
                                <td>{item.price}</td>
                                <td>{item.user}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductPrinting;