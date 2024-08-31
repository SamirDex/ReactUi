import React from 'react'
import styles from "./Footer.module.css";
import { SlSocialFacebook, SlSocialTwitter  } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <iframe src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&aq=0&oq=twitter&sll=28.659344,-81.187888&sspn=0.128789,0.264187&ie=UTF8&hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&t=m&z=15&iwloc=A&output=embed" className={styles.iframe}></iframe>
            </div>
            <div className={styles.innerFooter}>
                <div className={styles.social}>
                    <div className={styles.icons}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <a href="" className={styles.listLink}>
                                    <SlSocialFacebook className={styles.icon}/>
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href=""  className={styles.listLink}>
                                    <SlSocialTwitter className={styles.icon}/>
                                </a>
                            </li>
                            <li className={styles.listItem}>
                                <a href=""  className={styles.listLink}>
                                    <FiGithub className={styles.icon}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span>Copyright © Your Website 2023 | Developed by Samir</span>
            </div>
        </div>
    )
}

export default Footer