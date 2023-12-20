import styles from "./faq.module.css"
const Faq = () =>{
    return(
        <div className={styles.faq_grand}>
            <div className={styles.faq_parent}>
                <div className={styles.faq_aboutrove_setion}>
                    <div className={styles.question}>about Rove</div>
                    <div className={styles.ans}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </div>
                    <div className={styles.question}>how does ROVE reward their users?</div>
                    <div className={styles.ans}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </div>
                    <div className={styles.question}>how to earn rewards on ROVE?</div>
                    <div className={styles.ans}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </div>
                    <div className={styles.question}>what do you get as a ROVE Member?</div>
                    <div className={styles.ans}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;