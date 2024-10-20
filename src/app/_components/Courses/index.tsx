"use client"
import React from 'react';
import styles from './Courses.module.scss'; // Ensure you have the correct path for your SCSS file

const coursesData = [
    {
        title: "PERSONAL TRAINER",
        description: "Obtain a rewarding and successful accreditation where you will help your clients to achieve their health, fitness and sporting goals.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "BASIC NUTRITION",
        description: "Gain the essential guidelines to advise on the most effective nutrition for athletic performance and a healthy lifestyle.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "ADVANCED NUTRITION",
        description: "Get the ultimate qualification to be recognised as a prestigious specialist in nutrition for high performance athletes.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "SPECIALIST IN ABDOMINAL TRAINING",
        description: "Learn the ultimate techniques to become a guru in educating your clients to have a strong core and an impressive 6 Pack.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "PROFESSIONAL WEIGHT TRAINING KINESIOLOGY",
        description: "The best way to improve your knowledge about the science behind the weight training exercises.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "MASTER FITNESS COACH & CROSS TRAINING DEGREE",
        description: "Obtain your Masters degree to maximise the physical capacities and weight training applications.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
    {
        title: "MASTER BODYBUILDING & FITNESS DEGREE",
        description: "Obtain a Masters degree from the IFBB, the world authority for Body Building & Fitness.",
        logo: "/assets/images/IFBB-Logo-2023.png", // Replace with your logo path
    },
];

const Courses = () => {
    return (
        <div className={styles.coursesContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <h1>ONLINE COURSES</h1>
                    <hr className={styles.customHr} />
                </div>
            </div>
            {coursesData.map((course, index) => (
                <div className={styles.courseCard} key={index}>
                    <div className={styles.logo} style={{ backgroundImage: `url(${course.logo})` }}></div>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseDescription}>{course.description}</p>
                    <button className={styles.button}>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Courses;