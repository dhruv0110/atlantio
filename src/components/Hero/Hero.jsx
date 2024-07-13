import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/esm/Container";

const Hero = ({ className }) => {
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
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
          <div className="video" style={{ color: "white" }}>
            <div className="play-video">
              <i class="fa-solid fa-circle-play"></i>
              <span className="text mx-2">Play Video</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
