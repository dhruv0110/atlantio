import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/esm/Container";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";


const Hero = ({ className }) => {

  useGSAP(()=>{
    gsap.from(".all-info",{
      duration:1,
      opacity:0,
      y:25,
    })
    gsap.from(".end-part",{
      duration:1  ,
      opacity:0,
      y:25,
    })
  })
  return (
    <div className={`hero ${className}`}>
      <Container>
        <div className="all-info">
          <span>Powering Businesses Globally</span>
          <div className="outer-font">
            <p>
              ATLANTIO LOGISTICS <br /> POWERFUL SHIPPING
            </p>
            <div className="icon">
              <div className="icon-style"><i className="fa-brands fa-instagram"></i></div>
              <div className="icon-style"><i className="fa-brands fa-facebook"></i></div>
              <div className="icon-style"><i className="fa-brands fa-x-twitter"></i></div>
            </div>
          </div>
          <div className="video" style={{ color: "white" }}>
            <div className="play-video">
              <i className="fa-solid fa-circle-play"></i>
              <span className="text mx-2">Play Video</span>
            </div>
            <div className="lines">|</div>
            <div className="number">+(61)481 454 678</div>
          </div>
        </div>
        <div className="end-part">
          <div className="end-icon">
            <div className="dark-shade" style={{backgroundColor:"#f74b45"}}><i className="fa-solid fa-earth-americas"></i></div>
            <div className="dark-shade" style={{ transform: "rotate(-90deg)" }}><i className="fa-solid fa-plane"></i></div>
            <div className="dark-shade"><i className="fa-solid fa-truck-arrow-right"></i></div>
          </div>
          <p className="end-text mt-3">
            Lorem ipsum dolor sit amet consectetur <br/>
            adipisicing elit. Praesent porttitor sapien vel<br/>
            facilisis lobortis
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
