import styles from "./navbar.module.css"

const Navbar = () =>{
    return(
        <div className={styles.navbarGrand}>
            <div className={styles.navbarParent}>
                <div className={styles.BrandHead}><img src="rove.png" alt="" width="110px"/></div>
                <div className={styles.navitems}>
                    <div className={styles.item1}>Home</div>
                    <div className={styles.item2}>Feature</div>
                    <div className={styles.item3}>Pricing</div>
                    <div className={styles.item4}>About</div>
                </div>
                <div className={styles.lightdarkndButton}>
                <div className={styles.lightModeDarkMode}>
                    <div className={styles.moon}>
                    
                    </div>
                    <div className={styles.slash}></div>
                    <div className={styles.sun}>

                    </div>
                </div>
                <div className={styles.Getstarted}>Contact Us</div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;