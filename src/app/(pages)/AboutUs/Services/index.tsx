"use client"
import { useRef } from "react"
import styles from "./index.module.scss"
import {motion, useInView} from "framer-motion"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        },
    }

}
const Services =() =>{
 
 
    return (
    <motion.div
    className={styles.services}
    variants={variants}
    initial="initial"
    whileInView="animate"
    
    >

        <motion.div className={styles.textContainer} variants={variants}>
        <p>get to know more the world of <br/>IFBB Qatar </p>
        <hr/>
        </motion.div>
        <motion.div className={styles.titleContainer} variants={variants}>
            <div className={styles.title}>
                <img src='/IFBB.png' alt="aboutUs"/>
                <h1>
                    <b>IFBB </b>Qatar
                
                </h1>

            </div>
         <div className={styles.title}>
            <h1>
                <b> All </b> You Need To Know 
            </h1>
           <button> Who We Are ?</button>
         </div>
        </motion.div>
        <motion.div className={styles.listContainer} variants={variants}>
         <motion.div className={styles.box} whileHover={{background:"lightgray",color:"black"}} >
            <h2> Titre Ici a src/app/_comp/services</h2>
            <p>ask Hamdi what you should put here hihihihhihihihihihihihihihihihih
                hihihihihihihihihihihihiihihihiihihiihiihiihii
            </p>
            <button>GO</button>
         </motion.div>
         <motion.div className={styles.box} whileHover={{background:"lightgray",color:"black"}} >
            <h2> Titre Ici a src/app/_comp/services</h2>
            <p>ask Hamdi what you should put here hihihihhihihihihihihihihihihihih
                hihihihihihihihihihihihiihihihiihihiihiihiihii
            </p>
            <button>GO</button>
         </motion.div>
         <motion.div className={styles.box} whileHover={{background:"lightgray",color:"black"}} >
            <h2> Titre Ici a src/app/_comp/services</h2>
            <p>ask Hamdi what you should put here hihihihhihihihihihihihihihihihih
                hihihihihihihihihihihihiihihihiihihiihiihiihii
            </p>
            <button>GO</button>
         </motion.div>
         <motion.div className={styles.box} whileHover={{background:"lightgray",color:"black"}} >
            <h2> Titre Ici a src/app/_comp/services</h2>
            <p>ask Hamdi what you should put here hihihihhihihihihihihihihihihihih
                hihihihihihihihihihihihiihihihiihihiihiihiihii
            </p>
            <button>GO</button>
         </motion.div>
        </motion.div>

    </motion.div>

)

}
export default Services