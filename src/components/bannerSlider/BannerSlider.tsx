import React from "react";
import styles from "./BannerSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as ChevronLeft } from "../../assets/images/chevronleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/images/chevronright.svg";
import img1 from "../../assets/images/1.png";
function bannerSlider() {
  return (
    <Carousel
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              width: 50,
              height: 50,
              background: "#D8D7D7",
              opacity: "0.5",
              borderRadius: "100%",
              zIndex: 9,
              top: "45%",
              left: "18%",
              position: "absolute",
            }}
          >
            <ChevronLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              width: 50,
              height: 50,
              background: "#D8D7D7",
              opacity: "0.5",
              borderRadius: "100%",
              zIndex: 9,
              top: "45%",
              right: "18%",
              position: "absolute",
            }}
          >
            <ChevronRight />
          </button>
        )
      }
    >
      <div
        className={styles.content}
        style={{ background: `url(${img1})` }}
      ></div>
      <div className={styles.content} style={{ background: "blue" }}></div>
    </Carousel>
  );
}

export default bannerSlider;
