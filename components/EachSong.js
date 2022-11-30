import React, { useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import classes from "../styles/Songs.module.css";
import { useDispatch } from "react-redux";
import { changeCurrentSong } from "../redux/urlRedux";

const EachSong = ({ click, art, artist, title, album, fav, star, songObj }) => {

  let dispatch = useDispatch()
  const nextSong =()=>{
      dispatch(changeCurrentSong(songObj))

      
  }
 

  return (
    <>
      <tr onClick={click}>
        <td>{fav ? <AiFillHeart /> : <AiOutlineHeart />}</td>
        <td>
          <div style={{ backgroundImage: art }}></div>
        </td>
        <td>{title} </td>
        <td>{artist} </td>
        <td>{album}</td>

        <td>
          {star >= 1 ? <AiFillStar /> : <AiOutlineStar />}
          {star >= 2 ? <AiFillStar /> : <AiOutlineStar />}
          {star >= 3 ? <AiFillStar /> : <AiOutlineStar />}
          {star >= 4 ? <AiFillStar /> : <AiOutlineStar />}
          {star >= 5 ? <AiFillStar /> : <AiOutlineStar />}
        </td>
      </tr>
    </>
  );
};

export default EachSong;
