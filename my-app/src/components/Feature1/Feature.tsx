import styles from "./feature.module.css"

const Feature = () =>{
    return(
        <div className={styles.features_grand}>
            <div className={styles.features_parent}>
                <div className={styles.writtenPart}>
                    <div className={styles.Head}>Lorem ipsum dolor sit.</div>
                    <div className={styles.SubHead}>Lorem ipsum dolor sit amet, consectetur elit</div>
                    <div className={styles.Main_Para}>ed ut perspiciatis unde ed ed u ed ut perspiciquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </div>
                    <div className={styles.Explore_more}>Explore More</div>
                </div>
            </div>
        </div>
    )
}
export default Feature;