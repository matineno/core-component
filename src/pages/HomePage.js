import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Correct import
import styles from "../css/HomePage.module.css";
import productStyles from "../css/ProductPage.module.css";
import shopStyles from "../css/ShopPage.module.css";
import s1Image from "../images/rtx-3090.jpg";
import s2Image from "../images/img-02.gif";
import progressGraph from "../images/progress-graph.jpg"; 
import allProducts from "../data/allProducts";

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const HomePage = (props) => {
  const shuffledProducts1 = shuffleArray([...allProducts]).slice(0, 4);
  const shuffledProducts2 = shuffleArray([...allProducts]).slice(5, 9);

  return (
    <div className={styles.container}>
      <main>
        {/* Hero Banner Section */}
        <motion.section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className={styles.s1Title}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nvidia GeForce RTX 3090
          </motion.h1>
          <motion.p 
            className={styles.s1Subtitle}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Now available for preorder.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.s1Linkcontainer}
          >
            <Link className={styles.s1Link} to="/shopping-cart/catalog">
              Shop now
            </Link>
          </motion.div>
        </motion.section>

        {/* Products Section */}
        <motion.section 
          className={styles.productGallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.newArrivalsHeader}>
            <FontAwesomeIcon icon={faBell} size="2x" />
            <h3>New Arrivals!</h3>
          </div>
          <div className={styles.productSection}>
            <div className={styles.galleryImages}>
              {shuffledProducts1.map((product, index) => (
                <motion.li
                key={product.id}
                className={shopStyles.product}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/shopping-cart/products/${product.id}`}
                  className={shopStyles.productLink}
                >
                  <div key={index} className={productStyles.galleryItem}>
                    <div className={shopStyles.productImage}>
                      <img
                        className={styles.frontImage}
                        src={product.image}
                        alt={product.name}
                      />
                      <img
                        className={styles.backImage}
                        src={product.previewImage}
                        alt={product.name}
                      />
                    </div>
                    <div className={productStyles.galleryItemInfo}>
                      <p className={productStyles.galleryItemName}>{product.name}</p>
                      <p className={productStyles.galleryItemPrice}>${product.price}</p>
                    </div>
                  </div>
                </Link>
              </motion.li>
              ))}
            </div>
            <div className={styles.galleryImages}>
              {shuffledProducts2.map((product, index) => (
                <motion.li
                key={product.id}
                className={shopStyles.product}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/shopping-cart/products/${product.id}`}
                  className={shopStyles.productLink}
                >
                  <div className={shopStyles.productImage}>
                    <img
                      className={styles.frontImage}
                      src={product.image}
                      alt={product.name}
                    />
                    <img
                      className={styles.backImage}
                      src={product.previewImage}
                      alt={product.name}
                    />
                  </div>
                  <div className={shopStyles.productName}>
                    {product.name}
                  </div>
                  <div className={shopStyles.productPrice}>
                    ${product.price}
                  </div>
                </Link>
              </motion.li>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Secondary Hero Banner Section */}
        <motion.section
          style={{ backgroundImage: `url(${s2Image})` }}
          className={styles.s2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className={styles.s2Title}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover More
          </motion.h1>
          <motion.p 
            className={styles.s2Subtitle}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore our range of products.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.s2Linkcontainer}
          >
            <Link className={styles.s2Link} to="/shopping-cart/catalog">
              Browse now
            </Link>
          </motion.div>
        </motion.section>

        {/* Company Information Section */}
        <motion.section 
          className={styles.infoSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>About Core Components</h2>
            <p className={styles.infoText}>
              Founded in 2024, 
              Core Component's software platform, with over 175 million users,
              are composed of industry experts who are passionate about high tech
              performance and innovation. We constantly update our inventory with
              the latest and greatest in computer hardware to ensure you have
              access to the highest performance on the market.
            </p>
            <p className={styles.infoText}>
              Whether you're a gaming enthusiast, a professional content creator,
              or just create your own custom dream build PC, we have
              something for everyone. Thank you for choosing our store as your
              trusted source for all your computing needs.
            </p>
          </div>

          {/* Progress Section */}
          <div className={styles.graphContainer}>
            <motion.img 
              src={progressGraph} 
              alt="Company Progress Graph" 
              className={styles.graph}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section 
          className={styles.contactSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name:</label>
              <input type="text" id="name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email:</label>
              <input type="email" id="email" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message:</label>
              <textarea id="message" className={styles.formTextarea} required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className={styles.formButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>

        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
