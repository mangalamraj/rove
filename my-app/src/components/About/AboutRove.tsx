import styles from "./about.module.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import animationData from "../../assets/Animation - 1702632830579.json"

const About= () =>{
    const phoneRef = useRef<LottieRefCurrentProps>(null)
    useEffect(() => {
        AOS.init({
            offset:250,
            
          duration: 500, // Set the duration of the animation
          easing: "ease-in-out", // Choose the easing function for the animation
          once: false,
        });
      }, []);
    return(
        <div className={styles.aboutGrand}>
            <div className={styles.aboutParent}>
                <div className={styles.writtenPart}>
                    <div className={styles.Part1} data-aos="fade-up">
                        <div className={styles.WrittenHead}>we’ve got <p>your back.</p></div>
                        <div className={styles.WrittenPara}>gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.</div>
                    </div>
                    <div className={styles.Part1} data-aos="fade-up">
                        <div className={styles.WrittenHead}>we’ve got <p>your back.</p></div>
                        <div className={styles.WrittenPara}>gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.</div>
                    </div>
                    <div className={styles.Part2} data-aos="fade-up">
                        <div className={styles.WrittenHead}>we’ve got <p>your back.</p></div>
                        <div className={styles.WrittenPara}>gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.</div>
                    </div>
                </div>
                <div className={styles.DisplayFrame}>
                    <img src="rovecard.jpeg" className={styles.Frameimage}></img>
                  {/*  <Lottie onComplete={()=>{
                        phoneRef.current?.goToAndPlay(38, true)

                    }} lottieRef={phoneRef}  loop = {false} animationData={animationData} className={styles.Frameimage}/>*/}
                </div>
            </div>
        </div>
    )
}

export default About