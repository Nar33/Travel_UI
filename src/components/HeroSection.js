import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-1.mp4"
        controls
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      />
      <h1> Travel Awaits </h1>
      <p>What are you waiting for?"</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        > GET STARTED</Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        > WATCH TRAILER</Button>
      </div>
    </div>
  );
}
export default HeroSection;
