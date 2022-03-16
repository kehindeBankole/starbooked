import React from "react";
import styles from "./Home.module.scss";
function Home() {
  return (
    <section className={`${styles.homeContainer} bg-five `}>
      <div className={`${styles.banner} container `}></div>
    </section>
  );
}

export default Home;
