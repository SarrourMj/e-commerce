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

const Services = () => {
  const controls = useAnimation();
  const cardsData = [
    {
      title: "History of IFBB Qatar",
      content: "Explore the rich history of IFBB in Qatar and how it grew to become a leading federation in bodybuilding.",
      buttonText: "Learn More",
    },
    {
      title: "Our Achievements",
      content: "Discover the international achievements of Qatari athletes under the IFBB Qatar banner.",
      buttonText: "See Achievements",
    },
    {
      title: "Upcoming Events",
      content: "Stay updated on upcoming bodybuilding competitions and events hosted by IFBB Qatar.",
      buttonText: "View Events",
    },
    {
      title: "Training Programs",
      content: "Access top-notch training programs designed to help athletes reach peak performance.",
      buttonText: "Start Training",
    },
    {
      title: "Meet Our Athletes",
      content: "Get to know the athletes representing IFBB Qatar on the international stage.",
      buttonText: "Meet the Team",
    },
    {
      title: "Sponsorship Opportunities",
      content: "Learn about sponsorship opportunities and how to support the next generation of athletes.",
      buttonText: "Become a Sponsor",
    },
    {
      title: "Community Outreach",
      content: "Find out how IFBB Qatar is giving back to the community through fitness and health initiatives.",
      buttonText: "Get Involved",
    },
  ];

  useEffect(() => {
    const container = document.querySelector(`.${styles.listContainer}`) as HTMLElement; // Explicit cast to HTMLElement
    if (container && container.firstChild) {
      const card = container.firstChild as HTMLElement; // Cast the firstChild to HTMLElement
      const cardWidth = card.offsetWidth + 30; // Card width + gap
      const totalWidth = cardWidth * cardsData.length; // Total width of all cards
  
      // Check if the total width is larger than the container width
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
    <motion.div
      className={styles.services}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Title Section */}
      <motion.div className={styles.titleContainer} variants={cardVariants}>
        <div className={styles.title}>
          <h1><b>IFBB</b> Qatar</h1>
        </div>
        <div className={styles.title}>
          <h1><b>All</b> You Need To Know</h1>
        </div>
      </motion.div>

      {/* Automatically Sliding Cards Section */}
      <motion.div className={styles.listContainer} animate={controls}>
        {/* Duplicate cards for continuous sliding */}
        {[...cardsData, ...cardsData].map((card, index) => (
          <motion.div
            key={index}
            className={styles.box}
            variants={cardVariants}
            whileHover="hover"
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <button>{card.buttonText}</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
