import React from "react";
import styles from "./BannerSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as ChevronLeft } from "../../assets/images/chevronleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/images/chevronright.svg";
import { ReactComponent as ChevronSmall } from "../../assets/images/small.svg";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import {two} from "../../assets/images"

interface Props{
  img1:any;
  bookBtn:boolean
  sliderInfo?:any;
}



function BannerSlider(props:Props) {
const navigate=useNavigate()

  const indicatorStyles: React.CSSProperties = {
    background: "#3C3C3C",
    width: 10,
    height: 10,
    display: "inline-block",
    position: "relative",
    margin: "0 8px",
    borderRadius: 100,
    bottom: -30,
  };

  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      
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
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#F9A61B" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }
    }
      
    >
      {props.sliderInfo?props.sliderInfo.map((item:any,index:number)=>(
          <React.Fragment key={index}>
          <div
            className={`flex ${styles.content}`}
            style={{
              background: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >

              <p className="text-[white] m-auto z-[1] text-[.8rem] md:text-[1rem] w-[80%] font-[700]">{item.text}</p>
          <div className={styles.overlay}></div>

            {/* <div className="w-[100%] z-[1]">
            <button onClick={()=>{navigate("bookings"); window.scroll(0,0)}} className={`m-auto ${props.bookBtn?"block":"invisible"} ${styles.btn}`}>
              booking <ChevronSmall />
            </button>
            </div> */}
           
          </div>
        </React.Fragment>
      )):[1,2].map((item,index) => (
        <React.Fragment key={index}>
          <div
            className={styles.content}
            style={{
              background: `url(${props.img1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >

        

            <div className="w-[100%] z-[1]">
            <button onClick={()=>navigate("bookings")} className={`m-auto ${props.bookBtn?"block":"invisible"} ${styles.btn}`}>
              booking <ChevronSmall />
            </button>
            </div>
           
          </div>
        </React.Fragment>
      ))}

    </Carousel>
  );
}

export default BannerSlider;
