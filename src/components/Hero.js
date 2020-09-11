import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <p className={classes.font}>
        Bring the flavours, sights, and sounds of TD’s festivals to your home!
      </p>
      <div className={classes.circular}></div>
    </div>
  );
};

export default Hero;
