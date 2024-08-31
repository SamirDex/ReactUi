import React from 'react'
import styles from "./Download.module.css"

function Download() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Welcome to <span style={{fontStyle: 'italic'}}>your</span> next website!</h1>
            <a className={styles.button}>Download Now</a>
        </div>
    )
}

export default Download