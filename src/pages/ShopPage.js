import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/ShopPage.module.css";
import categories from "../data/categories";
import allProducts from "../data/allProducts";
import { Link, Route, Switch, useParams } from "react-router-dom";

const ShopPage = (props) => {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    if (category) {
      const productsByCategory = allProducts.filter(
        (product) => product.categoryId === category.id
      );
      setProductsByCategory(productsByCategory);
    }
  }, [categoryId, category]);

  useEffect(() => {
    console.log("allProducts:", allProducts);
    console.log("categories:", categories);
    console.log("productsByCategory:", productsByCategory);
  }, [productsByCategory]);

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.wrapper}>
        <aside className={styles.side}>
          <motion.div
            className={styles.sideTitleContainer}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sideTitleShop}>Shop /</div>
            <h1 className={styles.sideTitle}>
              <Switch>
                <Route exact path="/shopping-cart/catalog">
                  <span>All</span>
                  Products
                </Route>
                <Route exact path="/shopping-cart/catalog/:categoryId">
                  {category && category.name}
                </Route>
              </Switch>
            </h1>
          </motion.div>
          <ul className={styles.categories}>
            {categories.map((category) => (
              <Link
                to={`/shopping-cart/catalog/${category.id}`}
                className={styles.categoryLink}
                key={category.id}
              >
                <motion.li
                  className={styles.category}
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -200 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.li>
              </Link>
            ))}
          </ul>
        </aside>
        <main className={styles.main}>
          <ul className={styles.productList}>
            <Switch>
              <Route exact path="/shopping-cart/catalog">
                <AnimatePresence>
                  {allProducts &&
                    allProducts.map((product) => (
                      <motion.li
                        key={product.id}
                        className={styles.product}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={`/shopping-cart/products/${product.id}`}
                          className={styles.productLink}
                        >
                          <div className={styles.productImage}>
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
                          <div className={styles.productName}>
                            {product.name}
                          </div>
                          <div className={styles.productPrice}>
                            {format(product.price)}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                </AnimatePresence>
              </Route>
              <Route exact path="/shopping-cart/catalog/:categoryId">
                <AnimatePresence>
                  {productsByCategory &&
                    productsByCategory.map((product) => (
                      <motion.li
                        key={product.id}
                        className={styles.product}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={`/shopping-cart/products/${product.id}`}
                          className={styles.productLink}
                        >
                          <div className={styles.productImage}>
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
                          <div className={styles.productName}>
                            {product.name}
                          </div>
                          <div className={styles.productPrice}>
                            {format(product.price)}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                </AnimatePresence>
              </Route>
            </Switch>
          </ul>
        </main>
      </div>
    </motion.div>
  );
};

export default ShopPage;
