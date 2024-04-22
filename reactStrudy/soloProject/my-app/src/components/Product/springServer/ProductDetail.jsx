import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState(null);
    const [error, setError] = useState(null);

    const {productId} = useParams();
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                const productData = await response.json();
                setProductDetail(productData);
            } catch (error) {
                setError(error);
            }
        };

        fetchProductDetail();
    }, [productId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!productDetail) {
        return <div>Loading...</div>;
    }

    // Render the product detail
    return (
        <div className="container">
            <h2>Product Detail</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>User</th>
                        <th>Contents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productDetail.id}</td>
                        <td>{productDetail.p_name}</td>
                        <td>{productDetail.price}</td>
                        <td>{productDetail.user}</td>
                        <td>{productDetail.p_contents}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductDetail;
