import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Description = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error loading product details: {error.message}</p>;
  }

  return (
    <div>
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <ul>
        <li>Memory Type: {product.specifications.memoryType}</li>
        <li>Capacity: {product.specifications.capacity}</li>
        <li>Speed: {product.specifications.speed}</li>
        <li>Voltage: {product.specifications.voltage}</li>
        <li>Dimensions: {product.specifications.dimensions}</li>
      </ul>
    </div>
  );
};

export default Description;
