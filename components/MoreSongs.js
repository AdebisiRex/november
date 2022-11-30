import React from "react";
import classes from "../styles/Moresongs.module.css";
import {useSelector } from "react-redux"
import Image from "next/image"

const MoreSongs = () => {
  let currentSong = useSelector(state=>state.url.currentSong)
  return (
    <div className={classes.container}>
     
      <div className={classes.cover}>
        <h1>You're Playing</h1>
        <div style={{backgroundImage:`${currentSong.art}`, objectFit: "cover"}} className={classes.image}>
          {/* <Image src={currentSong.art} width={100} height={100}/> */}
            {/* <img src="" alt="" /> */}
        </div>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.album}</p>
      </div>
    </div>
  );
};

export default MoreSongs;
