import React from "react";
import GetStarted from "../getStarted/GetStarted";
import styles from "./faq.module.css";
import FaqListItem from "./FaqListItem";

function Faq() {
  return (
    <section className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <ul>
        <FaqListItem
          que="What is Metflix?"
          ans1="Metflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          ans2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />
        <FaqListItem
          que="How much does Metflix cost?"
          ans1="Watch Metflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 2 490 Ft to 4 490 Ft a month. No extra costs, no contracts."
        />
        <FaqListItem
          que="Where can I watch?"
          ans1="Watch anywhere, anytime. Sign in with your Metflix account to watch instantly on the web at Metflix.com from your personal computer or on any internet-connected device that offers the Metflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          ans2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Metflix with you anywhere."
        />
        <FaqListItem
          que="How do I cancel?"
          ans1="Metflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FaqListItem
          que="What can I watch on Metflix?"
          ans1="Metflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Metflix originals, and more. Watch as much as you want, anytime you want."
        />
        <FaqListItem
          que="Is Metflix good for kids?"
          ans1="The Metflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
          ans2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </ul>
      <GetStarted padding="1rem" />
    </section>
  );
}

export default Faq;
