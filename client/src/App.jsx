import "./App.css";
import React from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import Testimonials from "./components/testimonials/Testimonials";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
