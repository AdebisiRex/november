import React from "react";
import classes from "../styles/Artists.module.css";

const Artists = () => {
  return (
    <>
      <div className={classes.artscroll}>
        <>
          {[
            "BurnaBoy",
            "Yemi Alade",
            "Darey Art Alade",
            "Olamide",
            "Wizkid",
            "Naira Marley",
            "Bob Marley",
            "Drake",
          ].map((item, id) => (
            <div key={id} className={classes.artFrame}>
              <p >{item}</p>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Artists;
