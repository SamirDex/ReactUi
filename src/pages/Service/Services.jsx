import React from 'react'
import styles from "./Services.module.css"
import { FaHeart,FaPen } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { TbMoustache } from "react-icons/tb";


function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.headerDescription}>Services</p>
                <h1 className={styles.title}>What We Offer</h1>
            </div>
            <div className={styles.services}>
                <div className={styles.service}>
                    <span className={styles.serviceIcon}>
                        <IoIosPhonePortrait className={styles.Icon}/>
                    </span>
                    <h2 className={styles.serviceHeader}>Responsive</h2>
                    <p className={styles.serviceDescription}>Looks great on any screen size!</p>
                </div>
                <div className={styles.service}>
                    <span className={styles.serviceIcon}>
                        <FaPen className={styles.Icon}/>
                    </span>
                    <img src="#" alt="" className={styles.serviceImage}/>
                    <h2 className={styles.serviceHeader}>Redesigned</h2>
                    <p className={styles.serviceDescription}>Freshly redesigned for Bootstrap 5.</p>
                </div>
                <div className={styles.service}>
                    <span className={styles.serviceIcon}>
                        <SlLike className={styles.Icon}/>
                    </span>
                    <h2 className={styles.serviceHeader}>Favorited</h2>
                    <p className={styles.serviceDescription}>Millions of users <FaHeart /> Start Bootstrap!</p>
                </div>
                <div className={styles.service}>
                    <span className={styles.serviceIcon}>
                        <TbMoustache className={styles.Icon}/>
                    </span>
                    <img src="#" alt="" className={styles.serviceImage}/>
                    <h2 className={styles.serviceHeader}>Question</h2>
                    <p className={styles.serviceDescription}>I mustache you a question...</p>
                </div>
            </div>
        </div>
    )
}

export default Services