import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Description = ({ productId }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axios.get(`https://api.example.com/products/${productId}/description`);
        setDescription(response.data.description);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDescription();
  }, [productId]);

  if (loading) {
    return <p>Loading description...</p>;
  }

  if (error) {
    return <p>Error loading description: {error.message}</p>;
  }

  return <p>{description}</p>;
};

export default Description;
