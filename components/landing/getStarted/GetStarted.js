import React from "react";
import styles from "./getStarted.module.css";

function GetStarted({ padding = 0 }) {
  return (
    <form className={styles.get_started_form} style={{ padding: padding }}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <input type="email" placeholder="Email address" />
      <button>Get Started {">"}</button>
    </form>
  );
}

export default GetStarted;
