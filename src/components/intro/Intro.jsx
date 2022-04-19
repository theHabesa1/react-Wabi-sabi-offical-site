import "./intro.scss";
import { init } from 'ityped';
import React, { useState } from "react";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["KeyChains", "Earings", "Gifts"],
    });
  }, []);
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/wabisabi.png"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <h2>Hi There , we're </h2>
        <h2>ዋቢ፡ሳቢ  </h2>
        <h3>
            Cretives <span ref={textRef}></span>
          </h3>
        

    



        </div>
        

        <div>
        <a href="#portfolio">
         <img src="assets/down.png"></img>
       </a>
        </div>

      </div>
       
    
    </div>
  )
}
