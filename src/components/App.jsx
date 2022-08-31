import React from "react";
import "./appstyle.css"

import {Route,Routes,useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import Header from "./header/header.jsx";
import Home from "./home/home.jsx";
import Create from "./create/create.jsx";
import About from "./about/about.jsx";
import Footer from "./footer/footer.jsx";

function App() {
  const location = useLocation();
  return(
    <>
      <Header/>

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/Blog" element={<Home/>}/>
          <Route path="/Blog/create" element={<Create/>}/>
          <Route path="/Blog/about" element={<About/>}/>         
        </Routes>
      </AnimatePresence>

      <Footer/>
    </>
  )
}

export default App;