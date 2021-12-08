import React, { useState } from "react";
import styles from "./faqListItem.module.css";

function FaqListItem({ que, ans1, ans2 }) {
  const [rendered, setRendered] = useState(false);
  const updateRendered = () => setRendered(!rendered);

  /*const articleStyle = {
    height: rendered ? (ans2 ? "22rem" : "10rem") : 0,
    transition: 300,
  };*/

  const articleStyle = {
    maxHeight: rendered ? "25rem" : 0,
    transition: "300ms",
  };

  const ansDisplay = {
    opacity: rendered ? 1 : 0,
    transition: "300ms",
  };

  return (
    <li className={styles.faq_list_item}>
      <button onClick={updateRendered}>
        {que} <span>+</span>
      </button>
      <article style={articleStyle}>
        {ans1 && <p style={ansDisplay}>{ans1}</p>}
        {ans2 && <p style={ansDisplay}>{ans2}</p>}
      </article>
    </li>
  );
}

export default FaqListItem;
