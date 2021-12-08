import React from "react";
import FooterInfo from "./FooterInfo";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h6>Questions? Call 80 982 787</h6>
      <div className={styles.footer_infos}>
        <div className={styles.container}>
          <FooterInfo
            infos={[
              "FAQ",
              "Investor Relations",
              "Ways to Watch",
              "Corporate Information",
              "Only on Netflix",
            ]}
          />
          <FooterInfo
            infos={["Help Center", "Jobs", "Terms of Use", "Contact Us"]}
          />
        </div>
        <div className={styles.container}>
          <FooterInfo
            infos={["Account", "Redeem Gift Cards", "Privacy", "Speed Test"]}
          />
          <FooterInfo
            infos={[
              "Media Center",
              "Buy Gift Cards",
              "Cookie Preferences",
              "Legal Notices",
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
