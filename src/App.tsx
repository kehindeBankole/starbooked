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
const BookBand= lazy(() => import("./pages/book band/BookBand"));
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="main">
        <Suspense fallback={<p>loading</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/company" element={<Company />} />
            <Route path="/bookings" element={<Bookings_Page />} />
            <Route path="company/aboutus" element={<AboutUs />} />
            <Route path="news" element={<News/>} />
            <Route path="bookband" element={<BookBand/>} />
          </Routes>
        </Suspense>
      </main>

     

      <section className="our_services">
        {/* <OurService/> */}
      </section>

      <section className="book_and_sign">
        <Booking/>
       {/* <SignUp/> */}
      </section>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
