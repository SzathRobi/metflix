import React from "react";
import LandingSection from "./landingSection/LandingSection";
import Faq from "./faq/Faq";
import Image from "next/image";
//import landingImg from "../../imgs/landing.jpg";
import GetStarted from "./getStarted/GetStarted";
import styles from "./landing.module.css";

function Landing() {
  return (
    <>
      <section className={styles.landing}>
        <div className={styles.img_container}>
          <Image
            src="/imgs/landing.jpg"
            layout="fill"
            alt="landing-img"
          ></Image>
        </div>
        <div className={styles.landing_content}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <GetStarted />
        </div>
      </section>
      <LandingSection
        title="Enjoy on your TV."
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <LandingSection
        title="Download your shows to watch offline."
        text="Save your favorites easily and always have something to watch."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <LandingSection
        title="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        video_sm={true}
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />
      <LandingSection
        title="Create profiles for kids."
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img="https://occ-0-6201-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
      />
      <Faq />
    </>
  );
}

export default Landing;
