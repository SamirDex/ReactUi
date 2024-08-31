import React from 'react'
import styles from "./Herosection.module.css"
import { IoMenu } from "react-icons/io5";


function Herosection() {
    return (
        <div className={styles.container}>
            <div>
                <button><IoMenu className={styles.menu}/></button>
            </div>
            <div className={styles.text}>
                <div>
                    <h1 className={styles.header}>Stylish Portfolio</h1>
                </div>
                <div>
                    <p className={styles.description}>A Free Bootstrap Theme by Start Bootstrap</p>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <a href="#" className={styles.button}>Find Out More</a>
            </div>
           
        </div>
    )
}

export default Herosection