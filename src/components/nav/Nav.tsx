import React, { useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import { gsap } from "gsap";
import logoWhite from "../../assets/images/logowhite.svg";
import logoDark from "../../assets/images/logodark.svg";
import { useNavigate } from "react-router-dom";
import { CloseList } from "../../assets/images";
import {Link} from "react-router-dom"
type Drop={
dropMenu?:any
url:string;
title:string;
display?:boolean;
}
function Nav() {
  const timeline = gsap.timeline({ paused: true });
  const navigate = useNavigate();
  console.log(window.location.pathname);

const Items:Drop[]=[
  {
    url: "/",
    title: "home"
 
  },
  {
    url: "bookings",
    title: "bookings",
display:false,
dropMenu:<><li> <Link to="bookings/liveband">live band</Link> </li> <li> <Link to="bookings/dj">djs</Link> </li><li> <Link to="bookings/musician">musician</Link> </li><li><Link to="bookings/comedian">comedian</Link></li><li><Link to="bookings/mc">mc</Link></li><li><Link to="bookings/influencer">influencers</Link></li> </>

},
  {
    url: "services",
    title: "our services",
display:false,
dropMenu:<><li><Link to="">Talent Management</Link> </li> <li> <Link to="bookings">Bookings</Link> </li><li><Link to="">brand partnership</Link> </li><li><Link to="">PR</Link> </li><li> <Link to="">social media management</Link> </li><li> <Link to="">label services</Link> </li> </>

},
  {
    url: "company",
    title: "company",
display:false,
dropMenu:<><li><Link to="company/aboutus">About us</Link> </li> <li><Link to=""> Contact</Link></li></>

},
  {
    url: "news",
    title: "news",
}
]

  const [navItems,setNavItem]= useState(Items)
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

  const getTitle=(title:string)=>{
setNavItem(navItems.map((navItem)=>navItem.title===title&&navItem.hasOwnProperty("dropMenu")?{...navItem,display: !navItem.display}: {...navItem,display:false}))
  }

  const CloseDropDown=()=>{
  setNavItem(  navItems.map(item=>({...item,display:false})))
  }

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
            <>
            <button 
              onClick={() => {
              ( item.title==="home"||item.title==="news")&&navigate(item.url);
             getTitle(item.title)
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
                    position:"relative"
              }}
              
            >
              {item.title}
            </button>
             {(item.title!=="home")&&(<div className={`absolute top-[10%]  z-[100]  ${styles.dropdown}`} style={{width:item.title==="bookings"?"354px":item.title==="our services"?"377px":"172px", display:item.display?"block":"none",
            left:item.title==="bookings"||item.title==="our services"?"47%":"80%", borderRadius:item.title==="our services"?"20px":"0px"
            }}>
              <button className="absolute right-[27px]" style={{top:item.title==="company"?"40px":"0"}}  onClick={()=>CloseDropDown()}><img src={CloseList} style={{width:"20px",height:"20px" }} alt="close" /></button>
             <ul className="my-[67px]" style={{display:"block",
  paddingLeft:item.title==="bookings"||item.title==="our services"?"57px":"23px",

            }}>
             {item.dropMenu}
             </ul>
             </div>)}
             </>
          ))}
        </div>
        
      </div>
  <div className={`${styles.bottomBar} container capitalize ${styles.home}`} style={{marginTop:100,marginBottom:100 }}>
  { window.location.href===`${window.location.protocol}//${window.location.host}/` ? null : <div className="md:ml-[61px] text-[0.8rem] sm:text-[1rem] md:text-[1.5rem]"> Home <span style={{color:"#F9A61B"}}> {
      `> ${window.location.pathname.split("/")[1]}  ${window.location.pathname.split("/")[2]?`> ${window.location.pathname.split("/")[2]}`:""} `
      } </span>
      </div>}
  </div>
    </div>
  )
}

export default Nav;
