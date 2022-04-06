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
dropMenu:<><li onClick={()=>navigate("bookings/liveband")} className="hover:ml-[10px] transition-all"> live band </li> <li onClick={()=>navigate("bookings/dj")} className="hover:ml-[10px] transition-all"> djs</li><li onClick={()=>navigate("bookings/musician")} className="hover:ml-[10px] transition-all">musician </li><li onClick={()=>navigate("bookings/comedian")} className="hover:ml-[10px] transition-all">comedian</li><li onClick={()=>navigate("bookings/mc")} className="hover:ml-[10px] transition-all">mc</li><li onClick={()=>navigate("bookings/influencer")} className="hover:ml-[10px] transition-all">influencers</li> </>

},
  {
    url: "services",
    title: "our services",
display:false,
dropMenu:<><li onClick={()=>navigate("")} className="hover:ml-[10px] transition-all">Talent Management</li> <li onClick={()=>navigate("bookings")} className="hover:ml-[10px] transition-all">Bookings</li><li onClick={()=>navigate("")} className="hover:ml-[10px] transition-all">brand partnership</li><li onClick={()=>navigate("")} className="hover:ml-[10px] transition-all">PR </li><li onClick={()=>navigate("")} className="hover:ml-[10px] transition-all"> social media management </li><li onClick={()=>navigate("")} className="hover:ml-[10px] transition-all">label services </li> </>

},
  {
    url: "company/about",
    title: "company",
display:false,
dropMenu:<><li onClick={()=>navigate("company/about")} className="hover:ml-[10px] transition-all" style={{lineHeight:"15px"}}>About us </li> <li onClick={()=>navigate("contact")}  className="hover:ml-[10px] transition-all">Contact</li></>

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

  const getTitle=(e:any,title:string)=>{
setNavItem(navItems.map((navItem)=>navItem.title===title&&navItem.hasOwnProperty("dropMenu")?{...navItem,display: !navItem.display}:{...navItem,display:false}))

}



  const CloseDropDown=()=>{
  setNavItem(  navItems.map(item=>({...item,display:false})))
  }

  return (
    <div className={`${styles.nav} ${window.location.pathname==="/"&&"fixed top-[0]"}  z-10 w-screen  d-flex`} style={{background:window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#191c1f':"#F9F9F9"}}>
      <div
        className={`${styles.content}  flex flex-row justify-between items-start w-screen`}
      >
        <div className={`${styles.co} flex flex-row flex-wrap justify-between w-screen sm:mt-[0]  mt-[20px] `}>
          <div>
<div className=""> <img className="sm:h-[100px] h-[50px]"
            src={window.location.href===`${window.location.protocol}//${window.location.host}/` ? logoWhite:logoDark}
            alt="website logo"
            onClick={() => navigate("/")}
          /></div>
          <div className="capitalize text-[.6rem]  sm:mt-[10px] sm:pl-[61px]" style={{color:window.location.pathname==="/"?"#F9A61B":"black"}}>refined celebrity</div>

          </div>
     

          
          <button onClick={() => timeline.play()}>
            <i
              className="ri-menu-5-fill lg:hidden"
              style={{ color: window.location.href===`${window.location.protocol}//${window.location.host}/` ? 'white':"black", fontSize: 25 }}
            ></i>
          </button>

        </div>
        <div
          className={`${styles.navItems} mobileNav translate-x-full flex flex-col lg:hidden fixed top-0 left-[0] bg-five h-[100%] w-[100%] z-50 justify-center  items-center`}
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
            key={index}
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
            <span key={index}>
            <button 
            id="dropdown-btn"
              onClick={(e) => {
              ( item.title==="home"||item.title==="news")&&navigate(item.url);
             getTitle(e.target,item.title)
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
             {(item.title!=="home")&&(<div key={index+1} className={`absolute   z-[100]  ${styles.dropdown}`} style={{width:item.title==="bookings"?"280px":item.title==="our services"?"320px":"172px", height:item.display&&(item.title==="our services"||item.title==="bookings")?"300px":item.display&&item.title==="company"?"140px":"0px",overflow:"hidden", transition:"all .5s",
            left:item.title==="bookings"||item.title==="our services"?"47%":"80%", borderRadius:"20px"
            }}>
              <button className="absolute" style={{top:item.title==="company"?"30px":"-10px",right:item.title==="company"?"27px":"10px"}}  onClick={()=>CloseDropDown()}><img src={CloseList} style={{width:"20px",height:"20px" }} alt="close" /></button>
             <ul className="my-[67px]" style={{
              paddingLeft:item.title==="bookings"||item.title==="our services"?"40px":"23px",
              margin:item.title==="company"?"46px 0":"37px 0"
            }}>
              <span className="hover:ml-[10px] transition-all" onClick={()=>setNavItem(navItems.map(navItem=>({...navItem,display:false})))}> {item.dropMenu}</span>
            
             </ul>
             </div>)}
             </span>
          ))}
        </div>
        
      </div>
  <div  className={`${styles.bottomBar}  container capitalize ${styles.home}`} >
  { window.location.href===`${window.location.protocol}//${window.location.host}/` ? null : <div className="md:ml-[61px] my-[50px] sm:my-[100px] lg text-[0.8rem] sm:text-[1rem] md:text-[1.5rem]"><button className="inline capitalize" onClick={()=>navigate("/")}>Home</button>  <span style={{color:"#F9A61B"}}> 
   {">"} <button  onClick={()=>navigate(`${window.location.pathname.split("/")[1]}`)} className="inline capitalize">{window.location.pathname.split("/")[1]}</button>  <button className="inline capitalize">{window.location.pathname.split("/")[2]?`> ${window.location.pathname.split("/")[2]}`:""}</button> 
      </span>
      </div>}
  </div>
    </div>
  )
}

export default Nav;
