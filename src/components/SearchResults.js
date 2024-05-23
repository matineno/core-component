import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/SearchResults.module.css";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className={styles.results}>
      {results.map((product) => (
        <Link key={product.id} to={`/shopping-cart/products/${product.id}`} className={styles.resultItem}>
          <img src={product.image} alt={product.name} className={styles.resultImage} />
          <div className={styles.resultDetails}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
