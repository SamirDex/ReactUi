import React from 'react'
import styles from "./Portfolio.module.css"

function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>
                    <p className={styles.head}>Portfolio</p>
                    <h1 className={styles.title}>Recent Projects</h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.description}>
                            <h4>Stationary</h4>
                            <p>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                        </div>
                        <div className={styles.project} >
                            <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-1.jpg" alt="" />
                        </div>
                        <div className={styles.hover}></div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.description}>
                            <h4>Ice Cream</h4>
                            <p>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                        </div>
                        <div className={styles.project} >
                            <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-2.jpg" alt="" />
                        </div>
                        <div className={styles.hover}></div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.description}>
                            <h4>Strawberries</h4>
                            <p>Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                        </div>
                        <div className={styles.project} >
                            <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-3.jpg" alt="" />
                        </div>
                        <div className={styles.hover}></div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.description}>
                            <h4>Workspace</h4>
                            <p>A yellow workspace with some scissors, pencils, and other objects.</p>
                        </div>
                        <div className={styles.project} >
                            <img src="https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/portfolio-4.jpg" alt="" />
                        </div>
                        <div className={styles.hover}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio