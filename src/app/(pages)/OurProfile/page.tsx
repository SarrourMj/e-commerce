"use client";
import React from 'react';
import styles from './index.module.scss'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const OurProfile = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Company Logo" />
      </div>

      

      <div className={styles.description}>
        <h2>Who We Are</h2>
        <p>
          We are a team of visionaries and innovators, crafting the future with cutting-edge
          technology, creativity, and a passion for excellence. Our commitment to reshaping
          industries and enhancing experiences through bold ideas drives our mission forward.
        </p>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <i className="fas fa-rocket"></i>
          <h3>Innovation</h3>
          <p>Pioneering next-gen solutions to transform the world.</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-cogs"></i>
          <h3>Automation</h3>
          <p>Making complexity simple with intelligent automation.</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-brain"></i>
          <h3>AI Powered</h3>
          <p>Utilizing AI to deliver intelligent, data-driven solutions.</p>
        </div>
      </div>

      {/* Additional Innovative Section */}
      <div className={styles.innovationSection}>
        <h2>Our Innovation</h2>
        <div className={styles.innovativeCards}>
          <div className={styles.card}>
            <h3>Future Ready</h3>
            <p>Leveraging the latest trends to keep our solutions ahead of the curve.</p>
          </div>
          <div className={styles.card}>
            <h3>Customer Centric</h3>
            <p>Every idea we build revolves around delivering customer value.</p>
          </div>
          <div className={styles.card}>
            <h3>Global Impact</h3>
            <p>Driving change that resonates on a global scale through our technology.</p>
          </div>
        </div>
      </div>

      {/* IFBB Qatar in Pictures Section */}
      <div className={styles.picturesSection}>
        <h2>IFBB Qatar in Pictures</h2>
        <div className={styles.pictureCards}>
          <div className={styles.card}>
            <img src="/assets/images/picture.jpg" alt="IFBB Qatar 1" />
            <h3>Event Highlights</h3>
            <p>Capturing the spirit of competition.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/picture.jpg" alt="IFBB Qatar 2" />
            <h3>Team Unity</h3>
            <p>Our team stands strong together.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/picture.jpg" alt="IFBB Qatar 3" />
            <h3>Champion Moments</h3>
            <p>Celebrating our champions.</p>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video controls>
          <source src="/assets/videos/IFBB - Institutional Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default OurProfile;
