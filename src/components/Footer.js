import React from 'react';
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2024 CORE COMPONENTS. </p>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
