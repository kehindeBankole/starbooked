import React, { Suspense, lazy } from "react";
import {Nav,Footer,Booking,SignUp,OurService} from "./components";
import { Routes, Route } from "react-router-dom";
// import Bookings_page from "./pages/bookings/Bookings_Page";

const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
const Company= lazy(() => import("./pages/company/Company"));
const Bookings_Page= lazy(() => import("./pages/bookings/Bookings_Page"));
const AboutUs= lazy(() => import("./pages/about us/AboutUs"));
const News= lazy(() => import("./pages/News/News"));
const BookBand= lazy(() => import("./pages/book artist/BookBand"));
const BookDj= lazy(() => import("./pages/book artist/BookDj"));
const BookMusician= lazy(() => import("./pages/book artist/BookMusician"));
const BookComedian= lazy(() => import("./pages/book artist/BookComedian"));
const BookMc= lazy(() => import("./pages/book artist/BookMc"));
const BookInfluencer= lazy(() => import("./pages/book artist/BookInfluencer"));
const BandInfo= lazy(() => import("./pages/artist info/Band"));
const ComedianInfo= lazy(() => import("./pages/artist info/Comedian"));
const MusicianInfo= lazy(() => import("./pages/artist info/Musician"));
const McInfo= lazy(() => import("./pages/artist info/Mc"));
const DjInfo= lazy(() => import("./pages/artist info/Dj"));
const InfluencerInfo= lazy(() => import("./pages/artist info/Influencer"));
const Book= lazy(() => import("./pages/Book/Book"));
function SmallNav(){
  return(
    <div className="container mt-80">
  
    </div>
  )
}
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
     
      <main className="main">
   
        <Suspense fallback={<p>loading</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/company" element={<Company />} /> */}
            <Route path="/bookings" element={<Bookings_Page />} />
            <Route path="/company/aboutus" element={<AboutUs />} />
            <Route path="news" element={<News/>} />
            <Route path="bookings/liveband" element={<BookBand/>} />
            <Route path="bookings/dj" element={<BookDj/>} />
            <Route path="bookings/musician" element={<BookMusician/>} />
            <Route path="bookings/comedian" element={<BookComedian/>} />
            <Route path="bookings/mc" element={<BookMc/>} />
            <Route path="bookings/influencer" element={<BookInfluencer/>} />
            <Route path="bookings/musician/about" element={<MusicianInfo/>} />
            <Route path="bookings/comedian/about" element={<ComedianInfo/>} />
            <Route path="bookings/mc/about" element={<McInfo/>} />
            <Route path="bookings/dj/about" element={<DjInfo/>} />
            <Route path="bookings/influencer/about" element={<InfluencerInfo/>} />
            <Route path="bookings/liveband/about" element={<BandInfo/>} />
            <Route path="/book" element={<Book/>} />
          </Routes>
        </Suspense>
      </main>

     

      <section className="our_services">
        {/* <OurService/> */}
      </section>

      <section className="book_and_sign">
        {/* <Booking/> */}
       {/* <SignUp/> */}
      </section>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
