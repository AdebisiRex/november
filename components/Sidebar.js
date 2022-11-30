import React from "react";
import classes from "../styles/Sidebar.module.css";
import { GiBurningRoundShot } from "react-icons/gi";
import { TbPlaylist } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoCloudDownload } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";
import CallSongs from "../functionCall/CallSongs";

const Sidebar = () => {
  const [toggle, settoggle] = useState(false);

  const clickInput = () => {
    let inputId = document.getElementById("inputId");
    inputId.click();
  };

  return (
    <div className={toggle ? classes.side : classes.side2}>
      <button title="Toggle Side Bar" onClick={()=>settoggle(!toggle)}>
        {toggle?<AiOutlineClose />: <MdOutlineMenuOpen/>}
      </button>

      <ul>
        <li  title="Hot and Happening">
          <GiBurningRoundShot color="#222"/> <span className={classes.disabled}>Hot and Happening</span>
        </li>
        <li  title="Playlist">
          <TbPlaylist color="#222"/> <span className={classes.disabled} >Playlists</span>
        </li>
        <li  title="Search">
          <BiSearchAlt2 color="#222"/> <span className={classes.disabled}> Search</span>
        </li>
        <li onClick={clickInput} title="Local Library">
          <CallSongs/>
          <GoCloudDownload /> <span>Local Library</span>
        </li>
        <li  title="My Account">
          <TbUserCircle color="#222" /> <span className={classes.disabled}>My Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
