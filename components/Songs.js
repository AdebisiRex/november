import React, { useEffect, useState } from "react";
import classes from "../styles/Songs.module.css";
import EachSong from "./EachSong";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeCurrentSong } from "../redux/urlRedux";
import Audio from "./Audio";
const Songs = ({ songs }) => {

   let dispatch = useDispatch();
  
 
  
  return (
    <div className={classes.songList}>
      <h1>Local Songs</h1>
      <table>
        <thead>
          <tr>
            <td>
              <AiFillHeart />
            </td>
            <td>Art</td>
            <td>Title</td>
            <td>Artist</td>
            <td>Album</td>  
            <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {songs.map((item, id) => (
            <EachSong
              key={id}
              url={item.url}
              title={item.title}
              artist={item.artist}
              album ={item.album}
              art={item.art}
              songObj={item}
              click={()=>dispatch(changeCurrentSong(item))}
            />
          ))}
        </tbody>
      </table>
  
    </div>
  );
};

export default Songs;
