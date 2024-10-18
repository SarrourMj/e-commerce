"use client"
import React from 'react'
import styles from "./index.module.scss"
import { motion } from 'framer-motion'


const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    }
  }
}
const ContactUs = () => {
  return (
    <motion.div className={styles.contact} variants={variants} initial="initial" whileInView="animate" >
      <motion.div className={styles.textContainer} variants={variants}>
        <motion.h1> Contact Us </motion.h1>
          <motion.div className={styles.item} variants={variants}>
           <h2> Mail</h2>
           <span> src/app/_comp/ContactUs </span>
          </motion.div>
           <motion.div className={styles.item} variants={variants}>
              <h2> Address</h2>
              <span> Qatar street qatar </span>
           </motion.div>
          <motion.div className={styles.item} variants={variants}>
            <h2> Phone</h2>
            <span> +216 458 7851 8547  </span>
          </motion.div>
      </motion.div>
         
      <div className={styles.formContainer}></div>
      <form>
        <input type="text" required placeholder='Name' />
        <input type="text" required placeholder='Email' />
        <textarea rows={8} placeholder='Message'  />
        <button>Submit</button>
      </form>
    </motion.div>
  )
}

export default ContactUs
