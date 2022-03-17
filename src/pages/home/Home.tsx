import React from "react";
import BannerSlider from "../../components/bannerSlider/BannerSlider";

import styles from "./Home.module.scss";
function Home() {
  return (
    <section className={`${styles.homeContainer} bg-five `}>
      <div className={`${styles.banner} container `}>
        <BannerSlider />
      </div>
    </section>
  );
}

export default Home;
