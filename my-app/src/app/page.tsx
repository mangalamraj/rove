"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/navbar'
import HeadSubhead from '@/components/headSubhead/HeadSubhead'
import { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
import About from '@/components/About/AboutRove';
import Parallax from '@/components/Parallax/Parallax';
import Footer from '@/components/Footer/Footer';
import Faq from '@/components/FAQS/faq';
import Feature from '@/components/Feature1/Feature';
import Feature2 from '@/components/Feature2/feature_2';


export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1],[0.8, 1.3]);

  return (
    <div className={styles.main} id={styles.id}>

        <HeadSubhead/>
        <div className={styles.MainImageContainer}>
        <motion.div
          ref= {ref}
          style={{
            scale: scaleProgress,
            opacity: scrollYProgress,
          }}
        >
        <img src='rovecard.png' width="800px" className={styles.displayImage}></img>
        </motion.div>
        
        </div>
        <Feature/>
        <About/>
        <Parallax/>
        <Feature2/>
        <Faq/>
        <Footer/>
    </div>
  )
}
