import React, { useEffect, useState,useLayoutEffect } from "react";
import styles from "./Nav.module.scss";
import { gsap } from "gsap";
import logoWhite from "../../assets/images/logowhite.svg";
import logoDark from "../../assets/images/logodark.svg";
import { useNavigate, useParams } from "react-router-dom";
import { CloseList } from "../../assets/images";
import { ReactComponent as ChevronDown } from "../../assets/images/chevrondown.svg";
import { ReactComponent as ChevronDownDark } from "../../assets/images/chevrondowndark.svg";
import { ReactComponent as SearchDark } from "../../assets/images/searchdark.svg";
import { ReactComponent as SearchLight } from "../../assets/images/searchlight.svg";

type Drop={
dropMenu?:any
url:string;
title:string;
display?:boolean;
}



function Nav() {
  const timeline = gsap.timeline({ paused: true });
  const navigate = useNavigate();
// window.scroll(0,0)
const Items:Drop[]=[
  {
    url: "/",
    title: "home"
 
  },
  {
    url: "bookings",
    title: "bookings",
display:false,
dropMenu:<><li onClick={()=>navigate("bookings")} className="hover:ml-[10px] transition-all"> All </li><li onClick={()=>navigate("bookings/liveband")} className="hover:ml-[10px] transition-all"> live band </li> <li onClick={()=>navigate("bookings/dj")} className="hover:ml-[10px] transition-all"> djs</li><li onClick={()=>navigate("bookings/musician")} className="hover:ml-[10px] transition-all">musician </li><li onClick={()=>navigate("bookings/comedian")} className="hover:ml-[10px] transition-all">comedian</li><li onClick={()=>navigate("bookings/mc")} className="hover:ml-[10px] transition-all">mc</li><li onClick={()=>navigate("bookings/influencer")} className="hover:ml-[10px] transition-all">influencers</li> </>

},
  {
    url: "services",
    title: "our services",
display:false,
dropMenu:<><li onClick={()=>navigate("services/Corporate Entertainment")} className="hover:ml-[10px] transition-all">Corporate Entertainment</li> <li onClick={()=>navigate("services/Private Parties")} className="hover:ml-[10px] transition-all">Private Parties </li><li onClick={()=>navigate("services/Wedding Entertainment")} className="hover:ml-[10px] transition-all">Wedding Entertainment </li><li onClick={()=>navigate("services/Birthday Party Entertainment")} className="hover:ml-[10px] transition-all">Birthday Entertainment</li><li onClick={()=>navigate("services/Celebrity Appearances")} className="hover:ml-[10px] transition-all"> Celebrity Appearances </li><li onClick={()=>navigate("services/Public Concerts")} className="hover:ml-[10px] transition-all">Public Concerts </li><li onClick={()=>navigate("services/Fairs, Carnivals, and Festivals")} className="hover:ml-[10px] transition-all">Fairs, Carnivals, and Festivals </li> </>

},
  {
    url: "company/about",
    title: "company",
display:false,
dropMenu:<><li onClick={()=>navigate("company/about")} className="hover:ml-[10px] transition-all" style={{lineHeight:"15px"}}>About us </li> <li onClick={()=>navigate("company/contact")}  className="hover:ml-[10px] transition-all">Contact</li></>

},
  {
    url: "news",
    title: "news",
}
]

  const [navItems,setNavItem]= useState(Items)

  const [sideNav,setSideNav]=useState(false)

  const getTitle=(title:string)=>{
setNavItem(navItems.map((navItem)=>navItem.title===title&&navItem.hasOwnProperty("dropMenu")?{...navItem,display: !navItem.display}:{...navItem,display:false}))

}



  const CloseDropDown=()=>{
  setNavItem(navItems.map(item=>({...item,display:false})))
  }
  
  return (
    <>    <div id="top" className={`${styles.nav} fixed top-[0] z-10 w-screen  d-flex`} style={{background:window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#191c1f':"#F9F9F9"}}>
      <div
        className={`${styles.content}  flex flex-row justify-between items-center  w-screen`}
      >
        <div className={`${styles.co} flex flex-row my-[10px]  justify-between items-center w-screen `}>
        
<img 
            src={window.location.href===`${window.location.protocol}//${window.location.host}/` ? logoWhite:logoDark}
            alt="website logo"
            onClick={() => {navigate("/"); window.scroll(0,0) }}
          />
          
     <div className="flex">
     {/* <button className=" lg:hidden"> <ManageSearchIcon  sx={{ fontSize: 40}} className="text-[white] "/></button>             */}

          
<button onClick={() => setSideNav(true)}>
  <i
    className="ri-menu-5-fill lg:hidden md:mr-[32px]"
    style={{ color: window.location.href===`${window.location.protocol}//${window.location.host}/` ? 'white':"black", fontSize: 25 }}
  ></i>
</button>
     </div>
       

        </div>
        <div
          className={` mobileNav right-[0] ${sideNav?"w-full":"w-[0]"} transition-all duration-700 overflow-hidden flex flex-col  lg:hidden fixed top-[0] bg-five h-[100%]  z-[100] justify-center  items-center`}
        >
          <button
            className="absolute closeIcon"
            style={{ top: 20, right: 20 }}
            onClick={() => setSideNav(false)}
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
               setSideNav(false)
                navigate(item.url);
                window.scroll(0,0)
              }}
              className="text-lg text-one mb-30 nav-btn capitalize"
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
        <div className={`${styles.navItems} hidden mt-[15px] lg:flex bg-five`} style={{background:window.location.href===`${window.location.protocol}//${window.location.host}/` ? '#191c1f':"#F9F9F9"}}>
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
            <button 
            id="dropdown-btn"
              onClick={(e) => {
                if(item.title==="home"||item.title==="news"){
                  navigate(item.url);window.scroll(0,0)
                }
              // ( item.title==="home"||item.title==="news")&&navigate(item.url);window.scroll(0,0);
             getTitle(item.title)
              }}
              className={`text-lg ${item.title==="our services"&&"w-[129px]"}  flex items-center text-one mr-30`}
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
             {item.title}{(item.title!=="home"&&item.title!=="news"&&window.location.pathname=="/")&&<ChevronDown className="ml-[5px]"/>}
             {(item.title!=="home"&&item.title!=="news"&&window.location.pathname!=="/")&&<ChevronDownDark className="ml-[5px]"/>}
            </button>
             {(item.title!=="home")&&(<div key={index+1} className={`absolute top-[70px] z-[100]  ${styles.dropdown}`} style={{width:item.title==="bookings"?"280px":item.title==="our services"?"320px":"172px", height:item.display&&(item.title==="our services"||item.title==="bookings")?"300px":item.display&&item.title==="company"?"140px":"0px",overflow:"hidden", transition:"all .5s",
            left:item.title==="bookings"||item.title==="our services"?"47%":"80%", borderRadius:"20px"
            }}>
              <button className="absolute" style={{top:item.title==="company"?"30px":"-10px",right:item.title==="company"?"27px":"10px"}}  onClick={()=>CloseDropDown()}><img src={CloseList} style={{width:"20px",height:"20px" }} alt="close" /></button>
             <ul className="my-[67px]" style={{
              paddingLeft:item.title==="bookings"||item.title==="our services"?"40px":"23px",
              margin:item.title==="company"?"46px 0":"37px 0"
            }}>
              <span className="hover:ml-[10px] transition-all" onClick={()=>{setNavItem(navItems.map(navItem=>({...navItem,display:false})));window.scroll(0,0)}}> {item.dropMenu}</span>
            
             </ul>
             </div>)}
             </React.Fragment>
          ))}
     <button onClick={()=>navigate("/search")}> {window.location.pathname==="/"?<SearchLight/>:<SearchDark/>}</button>            
        </div>
      </div>
 

    </div>
    <div  className={`${styles.bottomBar} pt-[50px] container capitalize ${styles.home}`} >
  { window.location.href===`${window.location.protocol}//${window.location.host}/` ? null : <div className="md:ml-[61px] my-[50px] sm:my-[100px] lg text-[0.8rem] sm:text-[1rem] md:text-[1.5rem]"><button className="inline capitalize" onClick={()=>navigate("/")}>Home</button>  <span style={{color:"#F9A61B"}}> 
   {">"} <button  onClick={()=>navigate(`${window.location.pathname.split("/")[1]}`)} className="inline capitalize">{window.location.pathname.split("/")[1].replace("2"," ")}</button>  <button className="inline capitalize">{window.location.pathname.split("/")[2]?`> ${window.location.pathname.split("/")[2].replace(/%20/g," ")}`:""}</button> 
      </span>
      </div>}
  </div>
    </>
  )
}

export default Nav;
