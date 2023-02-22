import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/home/Navbar";

import Header from "./components/aboutMeCard/Header";
import Main from "./components/aboutMeCard/Main";
import Footer from "./components/aboutMeCard/Footer";
import profile from "../src/images/profile-logo.jpeg";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <aboutMeCard>
          <div className="app--container">
            <div className="app--container--two">
              <Header img={profile} />
              <Main />
              <Footer />
            </div>
          </div>
        </aboutMeCard>

        <Contact />

        <div className="mainPage">
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/aboutMeCard" element={<aboutMeCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
