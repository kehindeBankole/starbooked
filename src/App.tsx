import React, { Suspense, lazy } from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
const Company= lazy(() => import("./pages/company/Company"));
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
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
