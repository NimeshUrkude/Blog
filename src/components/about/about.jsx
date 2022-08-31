import React from "react";
import "./aboutstyle.css";

import { motion } from "framer-motion";

function About() {
  return(
    <motion.div initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:1}} className="about_div">
      <div className="container about_lines">
        <span className="about_line_one">Hi it is a Project By Nimesh Urkude</span>
        <span className="about_line_two">Thank-you for visiting</span>
      </div>
    </motion.div>
  )
}

export default About;
