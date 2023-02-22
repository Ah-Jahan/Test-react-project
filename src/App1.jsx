import React from "react";
import "./App.css";
import Header from "./components/aboutMeCard/Header";
import Main from "./components/aboutMeCard/Main";
import Footer from "./components/aboutMeCard/Footer";
import Navbar from "./components/home/Navbar";
import profile from "../src/images/profile-logo.jpeg";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="app--container">
        <div className="app--container--two">
          <Header img={profile} />
          <Main />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
