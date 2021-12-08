import React from "react";
import styles from "./landingSection.module.css";

function LandingSection({
  title,
  text,
  img,
  video = null,
  video_sm = false,
  comp = null,
}) {
  const videoSize = {
    width: video_sm ? "60%" : "75%",
  };

  return (
    <article className={styles.landing_section}>
      <div>
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
      <div className={styles.img_container}>
        <img loading="lazy" src={img} alt="img"></img>
        {video && (
          <div className={styles.video_container} style={videoSize}>
            <video muted autoPlay loop src={video}></video>
          </div>
        )}
      </div>
      {comp}
    </article>
  );
}

export default LandingSection;
