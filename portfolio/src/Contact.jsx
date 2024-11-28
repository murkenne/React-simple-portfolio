import { Component } from "react";
import styles from "./Portfolio.module.css";


class Contact extends Component {
    render() {
        return (
        <>
           <h1 className={styles.contactHeader}>Contact Info</h1>
                <div className={styles.contactContainer}>
                    <ul className={styles.contactList}>
                        <li>
                            <span>Email:</span><a href="mailto:kenneth.murray@example.com"> kenneth.murray@example.com</a>
                        </li>
                        <li>
                            <span>Phone: (123) 456-7890</span>
                        </li>
                        <li>
                            <span>Social Media Links </span>
                            <hr></hr>
                            <br></br>
                            <a href="https://github.com/murkenne" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kenneth-murray-457158269" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                </ul>
            </div>
        </>    
        );
    }
}

export default Contact
