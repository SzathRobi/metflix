import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h6>METFLIX</h6>
      <select name="" id="">
        <option value="hu">Magyar</option>
        <option value="en">English</option>
      </select>
      <Link href="/link">SIGN IN</Link>
    </header>
  );
}

export default Header;
