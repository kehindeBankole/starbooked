import React, { useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import { gsap } from "gsap";
import logoWhite from "../../assets/images/logowhite.svg";
import logoDark from "../../assets/images/logodark.svg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const timeline = gsap.timeline({ paused: true });
  const navigate = useNavigate();
  const navItems: { url: string; title: string }[] = [
    {
      url: "/",
      title: "home",
    },
    {
      url: "bookings",
      title: "bookings",
    },
    {
      url: "services",
      title: "our services",
    },
    {
      url: "company",
      title: "company",
    },
    {
      url: "news",
      title: "news",
    },
  ];
  useEffect(() => {
    timeline
      .to(".mobileNav", { x: 0, duration: 0.2 })
      .from(".closeIcon", { rotate: "180deg", opacity: 0 }, ">");

    timeline.from(".mobileNav .nav-btn", {
      opacity: 0,
      y: 50,
      stagger: {
        each: 0.1,
      },
    });
    // window.location.href ===
    // `${window.location.protocol}//${window.location.host}/
  });

  return (
    <div className={`${styles.nav}  d-flex `} style={{background:window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#191c1f':"#F9F9F9"}}>
      <div
        className={`${styles.content} flex flex-row justify-between w-screen`}
      >
        <div className={`${styles.co} flex flex-row justify-between w-screen`}>
          <img
            src={window.location.href===`${window.location.protocol}//${window.location.host}/` ? logoWhite:logoDark}
            alt="website logo"
            onClick={() => navigate("/")}
          />
          <button onClick={() => timeline.play()}>
            <i
              className="ri-menu-5-fill lg:hidden"
              style={{ color: window.location.href===`${window.location.protocol}//${window.location.host}/` ? 'white':"black", fontSize: 25 }}
            ></i>
          </button>
        </div>
        <div
          className={`${styles.navItems} mobileNav translate-x-full flex flex-col lg:hidden fixed top-0 left-0 bg-five h-screen w-screen z-50 justify-center items-center`}
        >
          <button
            className="absolute closeIcon"
            style={{ top: 20, right: 20 }}
            onClick={() => timeline.reverse()}
          >
            <i
              className="ri-close-circle-line"
              style={{ color: "white", fontSize: 35 }}
            ></i>
          </button>
          {navItems.map((item, index) => (
            <button
              onClick={() => {
                timeline.reverse();
                navigate(item.url);
              }}
              className="text-lg text-one mb-30 nav-btn"
              style={{
                color:
                  item.title !== "home"
                    ? window.location.pathname.includes(item.url)
                      ? "#F9A61B"
                      : "#FFFEFE"
                    : window.location.href ===
                      `${window.location.protocol}//${window.location.host}/`
                    ? "#F9A61B"
                    : "#FFFEFE",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className={`${styles.navItems} hidden lg:flex bg-five`} style={{background:window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#191c1f':"#F9F9F9"}}>
          {navItems.map((item, index) => (
            <button 
              onClick={() => {
                navigate(item.url);
              }}
              className="text-lg text-one mr-30"
              style={{
                color:
                  item.title !== "home"
                    ? window.location.pathname.includes(item.url)
                      ? "#F9A61B"
                      : window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#FFFEFE':"#191C1F"
                    : window.location.href ===
                      `${window.location.protocol}//${window.location.host}/`
                    ? "#F9A61B"
                    : "#191C1F",
              }}
              
            >
              {item.title}
            </button>
          ))}
        </div>
        
      </div>
  <div className={`${styles.bottomBar} container capitalize ${styles.home}`} style={{marginTop:100,marginBottom:100 }}>
  { window.location.href===`${window.location.protocol}//${window.location.host}/` ? null : <div className="md:ml-[61px] text-[0.8rem] sm:text-[1rem] md:text-[1.5rem]"> Home <span style={{color:"#F9A61B"}}> {
      `> ${window.location.pathname.split("/")[1]} `
      } </span>
      </div>}
  </div>
    </div>
  )
}

export default Nav;
