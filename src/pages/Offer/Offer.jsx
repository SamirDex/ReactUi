import React from 'react'
import styles from "./Offer.module.css"; 

function Offer() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Stylish Portfolio is the perfect theme for your next project!</h2>
            <p className={styles.description}>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="#">Unsplash</a> !</p>
            <a className={styles.button}>What We Offer</a>
        </div>
    )
}

export default Offer