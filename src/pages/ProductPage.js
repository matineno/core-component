import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import allProducts from "../data/allProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = (props) => {
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(null);
  const [cursorIsVisible, setCursorIsVisible] = useState(false);

  useEffect(() => {
    if (product) {
      const image = document.getElementById("image");
      if (image) {
        image.style.opacity = 1;
      }
    }
  }, [product]);

  const nextImage = () => {
    if (product && product.gallery.length === 1) {
      return null;
    }

    const image = document.getElementById("image");
    if (image) {
      image.style.opacity = 0;
    }

    setTimeout(() => {
      if (product) {
        if (index < product.gallery.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
        if (image) {
          image.style.opacity = 1;
        }
      }
    }, 100);
  };

  const prevImage = () => {
    if (product && product.gallery.length === 1) {
      return null;
    }

    const image = document.getElementById("image");
    if (image) {
      image.style.opacity = 0;
    }

    setTimeout(() => {
      if (product) {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setIndex(product.gallery.length - 1);
        }
        if (image) {
          image.style.opacity = 1;
        }
      }
    }, 100);
  };

  const showCursor = (e) => {
    if (cursorIsVisible) {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        cursor.style.display = "flex";
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
      }
    }
    setCursorIsVisible(true);
  };

  const hideCursor = () => {
    setCursorIsVisible(false);
  };

  const showLeftCursor = (e) => {
    setCursor("left");
    showCursor(e);
  };

  const showRightCursor = (e) => {
    setCursor("right");
    showCursor(e);
  };

  const cursorVariants = {
    visible: { opacity: 0.8, scale: 1, x: "-50%", y: "-50%" },
    hidden: { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" },
  };

  const addToCart = () => {
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    props.addToCart(product, quantity);
  };

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  };

  const reviews = [
    {
      name: "John Doe",
      review: "This product is amazing! It exceeded my expectations and I highly recommend it to anyone.",
      rating: 5,
      date: "March 15, 2023",
    },
    {
      name: "Jane Smith",
      review: "Great value for the price. I am very satisfied with my purchase and the quality of the product.",
      rating: 4,
      date: "April 22, 2023",
    },
    {
      name: "Michael Brown",
      review: "Decent product, but it took a while to arrive. Overall, I'm happy with it.",
      rating: 3,
      date: "May 10, 2023",
    },
    {
      name: "Sarah Johnson",
      review: "I absolutely love this product! It's exactly what I was looking for.",
      rating: 5,
      date: "June 5, 2023",
    },
  ];
  

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.leftSide}>
          <AnimatePresence>
            {cursorIsVisible && (
              <motion.div
                variants={cursorVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ ease: "easeOut", duration: 0.4 }}
                id="cursor"
                className={styles.cursor}
              >
                {cursor && cursor === "left" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                  </svg>
                )}
                {cursor && cursor === "right" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#efece9"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <div className={styles.interactionArea}>
            <div
              onMouseEnter={showLeftCursor}
              onMouseMove={showLeftCursor}
              onMouseLeave={hideCursor}
              onClick={prevImage}
              className={styles.leftClickArea}
            />
            <div
              onMouseEnter={showRightCursor}
              onMouseMove={showRightCursor}
              onMouseLeave={hideCursor}
              onClick={nextImage}
              className={styles.rightClickArea}
            />
          </div>
          <div className={styles.bgStyle} />
          <img
            id="image"
            src={product.gallery[index]}
            alt={product.name}
            className={styles.productImage}
          />
          <div className={styles.galleryCounter}>
            <span className={styles.galleryCurrentIndex}>
              {(index + 1).toString().padStart(2, "0")}
            </span>
            {` / ${product.gallery.length.toString().padStart(2, "0")}`}
          </div>
        </div>
        <aside className={styles.rightSide}>
          <h2 className={styles.productTitle}>{product.name}</h2> {/* Product title moved here */}
          <p className={styles.productDescription}>
            {product.description}
          </p>
          {product.specifications && (
            <>
              <h3 className={styles.specTitle}>Specifications</h3>
              <ul className={styles.specifications}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}</li>
                ))}
              </ul>
            </>
          )}
          <div className={styles.productQuantity}>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1"/>
          </div>
          <div className={styles.productPrice}>{format(product.price)}</div>
          <div className={styles.buyButtons}>
            <button onClick={addToCart} className={styles.addToBag}>
              <div>
                <span>Add to bag</span>
                <span>Add to bag</span>
              </div>
            </button>
            <button onClick={addToCart} className={styles.buyNow}>
              Buy it now
            </button>
          </div>
        </aside>
      </main>

      <section className={styles.reviewSection}>
        <h3 className={styles.reviewTitle}>Customer Reviews</h3>
        <div className={styles.reviews}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className={styles.review}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <h4 className={styles.reviewerName}>{review.name}</h4>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <div className={styles.reviewRating}>
                  {"⭐".repeat(review.rating)}
                </div>
              </div>
              <p className={styles.reviewText}>{review.review}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className={styles.productGallery}>
        <h3>Products You May Like</h3>
        <div className={styles.galleryImages}>
          {allProducts.slice(0, 4).map((product, index) => (
            <div key={index} className={styles.galleryItem}>
              <img
                src={product.image}
                alt={`${product.name}`}
                className={styles.galleryImage}
              />
              <div className={styles.galleryItemInfo}>
                <p className={styles.galleryItemName}>{product.name}</p>
                <p className={styles.galleryItemPrice}>{format(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
