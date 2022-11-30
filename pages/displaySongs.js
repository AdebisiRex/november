import React, { useState } from "react";
import Artists from "../components/Artists";
import Audio from "../components/Audio";
import Sidebar from "../components/Sidebar";
import Songs from "../components/Songs";
import classes from "../styles/Sidebar.module.css";

import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import MoreSongs from "../components/MoreSongs";

const displaySongs = () => {
  let urlArray = useSelector((state) => state.url.urlArray);
  let currentSong = useSelector((state) => state.url.currentSong);
  // let router = useRouter();

  
  

  return (
    <div className={classes.body}>
      <Sidebar />

      <div className={classes.bottom}>
        <Artists />
        {/* <div className={classes.grid}> */}
          <Songs songs={urlArray} />
          {/* <MoreSongs /> */}
        {/* </div> */}
        <Audio currentSong={currentSong} list={urlArray} />
      </div>
    </div>
  );
};

export default displaySongs;
