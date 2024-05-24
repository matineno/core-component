import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../css/NotFoundPage.module.css";
import homeStyles from "../css/HomePage.module.css";
import image404 from "../images/404-image.png";
import background404 from "../images/404-background.jpg";

const NotFoundPage = () => {
  const contentStyle = {
    backgroundImage: `url(${background404})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    width: '100%',
    height: '100vh',
  };

  return (
    <div className={styles.container}>
      <div className={styles.background404container} style={contentStyle}>
        <div className={styles.content}>
          <div className={styles.image404container}>
            <img src={image404} className={styles.image404} alt="404" />
          </div>
          <h3>Page Not Found</h3>
          <p>Sorry, the page you are looking for does not exist or has been moved with our other deprecated products for recycling.</p>
          <div className={styles.buttonContainer}>
            <Link className={homeStyles.s1Link} to="/shopping-cart">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
