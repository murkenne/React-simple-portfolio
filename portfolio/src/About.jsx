import React, { Component } from "react";
import styles from "./Portfolio.module.css";


class About extends Component {
    render () {
        return (
            <>
                <h1 className={styles.aboutHeader}> About</h1>
                <div className={styles.aboutContainer}>
                    <p>
                        Hi, I’m Kenneth Murray, a visionary entrepreneur and proud crypto millionaire. 
                        I’ve spent years navigating the exciting world of cryptocurrency, turning curiosity 
                        and innovation into life-changing success. Through strategic investments and a deep 
                        understanding of blockchain technology, I’ve built a financial empire that enables me 
                        to explore my passions and help others achieve their goals. My journey is a testament 
                        to embracing new opportunities and pushing the boundaries of what's possible in the 
                        digital economy.
                    </p>
                </div>
            </>
        );
    }
}

export default About