'use client';
import { Metadata } from 'next';
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph';
import Services from './Services/index';
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

export const dynamic = 'force-dynamic';

export default function AboutUs() {
    const [visibleSection, setVisibleSection] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleList = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    const handleScroll = () => {
        const section = document.getElementById('Services');
        if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= window.innerHeight && bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <section id='Services' className={isVisible ? styles.slideInVisible : styles.slideIn}>
                <div className={styles.wrapper}>
                    <div className={styles.centeredImage}>
                        <img src="/assets/images/IFBB-Logo-2023.png" alt="IFBB-Logo" />
                    </div>
                    <h1 className={styles.title}>International Fitness and Bodybuilding Federation</h1>
                    <p className={styles.paragraph}>
                        The International Federation of Bodybuilding and Fitness (IFBB), founded in 1946 in Canada, has 204 affiliated nations and is one of the largest and most active international sport federations in the world.
                    </p>
                    <p className={styles.paragraph}>The IFBB:</p>
                    <ul className={styles.textList}>
                        <li>Holds competitions in the eleven following competitive sports: men’s bodybuilding, men’s classic bodybuilding, men’s fitness, men’s physique, women’s physique, women’s body-fitness, women’s bikini fitness, women’s fitness, mixed pairs, children fitness, men’s wheelchair bodybuilding.</li>
                        <li>Organizes more than 8,000 local, national, regional, continental and world championships each year. Bodybuilding and Fitness are very popular sports practised as a healthy lifestyle worldwide.</li>
                        <li>www.ifbb.com receives 15 million hits each month from almost all countries around the world.</li>
                        <li>IFBB Social Media reaches a very impressive number of followers, athletes, officials, and Fitness enthusiasts, multiplied by millions through the social media of its 199 national affiliated federations.</li>
                        <li>IFBB is a signatory of the World Anti-Doping Agency (WADA) Code and strongly believes and supports the sport values and the promotion of health.</li>
                        <li>IFBB considers that the combination of proper training and nutrition, supported and guided by skilful and well-prepared coaches and trainers, are essential to promote athletes’ physical conditions and public health, with a zero tolerance to doping.</li>
                        <li>The International Federation of Bodybuilding and Fitness (IFBB) is the sport federation responsible for the management of bodybuilding and fitness worldwide, being a full member and/or being recognised by the following sports institutions and organizations:</li>
                        <div className={styles.container}>
                            <div>
                                <p onClick={() => toggleList('section1')} className={styles.plusText}>
                                    + Olympic Organizations
                                </p>
                                <ul className={visibleSection === 'section1' ? styles.visible : styles.hidden}>
                                    <li>Olympic Council of Asia (OCA)</li>
                                    <li>Pan-American Sports Organization (PANAMSPORTS)</li>
                                    <li>Central American and Caribbean Sports Organization (ODECABE)</li>
                                    <li>Central American Sports Organization (ORDECA)</li>
                                    <li>South American Sports Organization (ODESUR)</li>
                                    <li>Association of National Olympic Committees of Africa (ANOCA)</li>
                                    <li>Oceania National Olympic Committees (ONOC)</li>
                                </ul>
                                <p className={visibleSection === 'section1' ? styles.visible : styles.hidden}>
                                    As a matter of fact, bodybuilding and fitness have recently participated as a medalist sport at the 2019 Pan American Games (the second largest Olympic event following the Summer Olympic Games) held in Lima, Peru.
                                    Furthermore, in December 2019, our sport has been admitted by ODEABE as a medalist sport at the next 2022 Central American and Caribbean Games that will be held in Panama City, Panama.
                                </p>
                            </div>

                            <div>
                                <p onClick={() => toggleList('section2')} className={styles.plusText}>
                                    + Recognition By International Sport Organization
                                </p>
                                <ul className={visibleSection === 'section2' ? styles.visible : styles.hidden}>
                                    <li>Global Association of International Sports Federations (GAISF)</li>
                                    <li>Association of Pan-American Sports Confederations (ACODEPA)</li>
                                    <li>Association of African Sports Confederations (AASC)</li>
                                    <li>International University Sports Federation (FISU)</li>
                                    <li>Alliance of Independent Recognized Members of Sport (AIMS)</li>
                                    <li>International World Games Association (IWGA)</li>
                                </ul>
                            </div>

                            <div>
                                <p onClick={() => toggleList('section3')} className={styles.plusText}>
                                    + Affiliation to international education and coaching institutions
                                </p>
                                <ul className={visibleSection === 'section3' ? styles.visible : styles.hidden}>
                                    <li>European Union Sport Forum</li>
                                    <li>European College of Sport Science (ECSS)</li>
                                    <li>International Sport Press Association (AIPS)</li>
                                    <li>International Council for Coaching Excellence (ICCE)</li>
                                    <li>International Council of Sport Science and Physical Education (ICSSPE)</li>
                                    <li>International Pierre de Coubertin Committee (CIPC)</li>
                                    <li>Peace and Sport</li>
                                </ul>
                            </div>
                        </div>

                        <li>Muscle and Health, the official IFBB magazine with editions in Spanish, English, Arab, and Indian languages; IFBB events, Photo galleries, athlete interviews, IFBB news together with Nutritional and training articles in a reader-friendly design; a magazine from the athlete to the athlete.</li>
                        <li>As the worldwide authority on weight training and sport nutrition, the IFBB has an extensive Educational Course Program that provides qualified certification to Bodybuilding, Fitness, Health, and Sport related individuals from a variety of academic and professional backgrounds.</li>
                    </ul>
                </div>
                <div className={styles.videoContainer}>
                    <video width="600" controls>
                        <source src="/assets/videos/IFBB - Institutional Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
    );
}
