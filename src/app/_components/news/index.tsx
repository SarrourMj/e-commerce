"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "./index.module.scss";

const containerVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, backgroundColor: "#f0f0f0", color: "#000" }, // Color change on hover
};

const News = () => {
  const controls = useAnimation();
  const cardsData = [
    
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 1',
          description: 'An insightful description about the news article goes here.',
          date: 'October 19, 2024',
          caption: 'This is a brief caption about the course or article.',
          link: '/article1',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 2',
          description: 'Another description that highlights the importance of this news.',
          date: 'October 18, 2024',
          caption: 'Read more about the content in this article.',
          link: '/article2',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 3',
          description: 'Latest updates and details about recent developments.',
          date: 'October 17, 2024',
          caption: 'Learn about the new trends happening now.',
          link: '/article3',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 4',
          description: 'Important announcements and upcoming events in the industry.',
          date: 'October 16, 2024',
          caption: 'Get ready for what’s to come.',
          link: '/article4',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 5',
          description: 'Exploring new ideas and concepts in the modern world.',
          date: 'October 15, 2024',
          caption: 'Discover new perspectives.',
          link: '/article5',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 6',
          description: 'A deep dive into the latest tech innovations and advancements.',
          date: 'October 14, 2024',
          caption: 'Technology transforming industries.',
          link: '/article6',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 7',
          description: 'Updates on major projects happening across the globe.',
          date: 'October 13, 2024',
          caption: 'What’s new in project development.',
          link: '/article7',
        },
        {
          image: 'https://via.placeholder.com/300/7e1b6f',
          title: 'Exciting News Title 8',
          description: 'Understanding the role of leadership in modern companies.',
          date: 'October 12, 2024',
          caption: 'Leadership insights and practices.',
          link: '/article8',
        },
      ];


  useEffect(() => {
    const container = document.querySelector(`.${styles.listContainer}`) as HTMLElement;
    if (container && container.firstChild) {
        const firstCard = container.firstChild as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 30; // Card width + gap
      const totalWidth = cardWidth * cardsData.length; // Total width of all cards

      if (totalWidth > container.offsetWidth) {
        controls.start({
          x: [0, -totalWidth], // Start from 0 and slide to the negative total width
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Adjust speed for smoothness (can be changed)
              ease: "linear",
            },
          },
        });
      }
    }
  }, [controls, cardsData.length]);

  return (
    <motion.div className={styles.services}>
  <motion.div className={styles.titleContainer}>
    <div className={styles.title}>
      <h1>Latest News</h1>
      <hr className={styles.customHr} />
          </div>
  </motion.div>

  <motion.div className={styles.listContainer} animate={controls}>
    {[...cardsData, ...cardsData].map((card, index) => (
      <motion.div key={index} className={styles.box} whileHover="hover">
        <img src={card.image} alt={card.title} />
        <div className="card-content">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <div className="card-footer">
            <span>{card.date} | {card.caption}</span>
            <br/>
            <br/>
            <a href={card.link}>Read more →</a>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

  );
};

export default News;





