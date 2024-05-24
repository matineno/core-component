import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import allProducts from "../data/allProducts";

const ProductPage = (props) => {
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);
  const [index, setIndex] = useState(0);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level
  const imagesPerPage = 3;

  const nextImage = () => {
    if (product && product.gallery.length > 1) {
      setIndex((index + 1) % product.gallery.length);
    }
  };

  const prevImage = () => {
    if (product && product.gallery.length > 1) {
      setIndex((index - 1 + product.gallery.length) % product.gallery.length);
    }
  };

  const nextGalleryImages = () => {
    if (galleryStartIndex + imagesPerPage < allProducts.length) {
      setGalleryStartIndex(galleryStartIndex + imagesPerPage);
    }
  };

  const prevGalleryImages = () => {
    if (galleryStartIndex - imagesPerPage >= 0) {
      setGalleryStartIndex(galleryStartIndex - imagesPerPage);
    }
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

  const currentGalleryImages = allProducts.slice(galleryStartIndex, galleryStartIndex + imagesPerPage);

  const increaseZoom = () => {
    setZoomLevel(zoomLevel + 0.5);
  };

  const decreaseZoom = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.5);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.leftSide}>
          <div className={styles.zoomControls}>
            <button className={styles.zoomButton} onClick={increaseZoom}>
              +
            </button>
            <button className={styles.zoomButton} onClick={decreaseZoom}>
              -
            </button>
          </div>
          <img
            id="image"
            src={product.gallery[index]}
            alt={product.name}
            className={`${styles.productImage}`}
            style={{ transform: `scale(${zoomLevel})` }} // Apply zoom level
          />
          <div className={styles.galleryCounter}>
            <span className={styles.galleryCurrentIndex}>
              {(index + 1).toString().padStart(2, "0")}
            </span>
            {` / ${product.gallery.length.toString().padStart(2, "0")}`}
          </div>
          <div className={styles.arrowContainer}>
            <button className={styles.arrow} onClick={prevImage}>
              &#9664;
            </button>
            <button className={styles.arrow} onClick={nextImage}>
              &#9654;
            </button>
          </div>
        </div>
        <aside className={styles.rightSide}>
          <h2 className={styles.productTitle}>{product.name}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          {product.specifications && (
            <>
              <h3 className={styles.specTitle}>Specifications</h3>
              <ul className={styles.specifications}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      :
                    </strong>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className={styles.productQuantity}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              defaultValue="1"
            />
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
        <div className={styles.galleryImagesContainer}>
          <button className={styles.galleryArrow} onClick={prevGalleryImages}>
            &#9664;
          </button>
          <div className={styles.galleryImages}>
            {currentGalleryImages.map((product, index) => (
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
          <button className={styles.galleryArrow} onClick={nextGalleryImages}>
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
