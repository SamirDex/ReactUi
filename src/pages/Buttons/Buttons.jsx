import React from 'react'
import styles from "./Buttons.module.css"

function Buttons() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>The buttons below are impossible to resist...</h1>
            <div className={styles.btnGroup}>
                <a href="" className={styles.clickBtn}>Click me!</a>
                <a href="" className={styles.lookBtn}>Look at me!</a>
            </div>
        </div>
    )
}

export default Buttons