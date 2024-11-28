import React, { Component } from "react";
import styles from "./Portfolio.module.css";

class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.headerOverlay}>
            <h1 className={styles.headerTitle}>Kenneth Murray</h1>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
