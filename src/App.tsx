import React, { Suspense, lazy } from "react";
import {Nav,Footer,Booking,SignUp,OurService} from "./components";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
const Company= lazy(() => import("./pages/company/Company"));
const Bookings= lazy(() => import("./pages/bookings/Bookings"));
const AboutUs= lazy(() => import("./pages/about us/AboutUs"));
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
            <Route path="/bookings" element={<Bookings />} />
            <Route path="company/aboutus" element={<AboutUs />} />
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
