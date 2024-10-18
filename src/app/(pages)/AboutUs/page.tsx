// src/app/(pages)/AboutUs/page.tsx
import { Metadata } from 'next';
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph';
import Services from './Services/index';
import React from 'react';
import styles from './index.module.scss';
import ContactUs from '../../_components/ContactUs';

export const dynamic = 'force-dynamic'

export default function AboutUs() {
    return (
        <div>
        <section id='Services'>
        <div className={styles.aboutUssection}>
            <div className={styles.pageBody}>
            <Services />
            </div>
        </div>
        </section>
        <section id='Contact'>
            <ContactUs/>
        </section>
        </div>
    );
}

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn more about IFBB Qatar',
    openGraph: mergeOpenGraph({
        title: 'About Us',
        url: '/aboutus',
    }),
};
