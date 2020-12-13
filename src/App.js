import React from "react";
import NavBar from "./NavBar";
import Hook from "./Hook";
import Footer from "./Footer";
import Expertise from "./Expertise";
import Services from "./Services";

function App() {
  return (
      <>
        <NavBar/>
        <Hook/>
        <div style={{backgroundColor: "#d4d4d4"}} id="services">
            <Expertise/>
            <Services/>
        </div>
        <Footer/>
      </>
  );
}

export default App;
