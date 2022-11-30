import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/Audio.module.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import jsmediatags from "jsmediatags";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSong } from "../redux/urlRedux";
// import young from "../resources/young.mp3"

const Audio = ({list}) => {
  const [status, setstatus] = useState(true);
  

  const [current, setcurrent] = useState(0.00);
  const [length, setlength] = useState(0.00);
  const [scrub, setscrub] = useState(0);
  //refs
  let audioRef = useRef();
  let audio = audioRef.current;
  let timelineRef = useRef();
  let timeline = timelineRef.current;

  let dispatch = useDispatch()
  let currentSong = useSelector(state=>state.url.currentSong)
  let allSongs = useSelector(state=>state.url.urlArray)
  


 

  const toggleMusic = () => {
   
      setstatus(!status);
  
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    
  };

  const scrubSlider = (e) => {
    let target = e.target.value;
    audio.currentTime = (Number(target) * Number(audio.duration)) / 100;
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    setscrub(percentagePosition);
  };

  const moveSlider = () => {
    setcurrent(() => {
      let mins = Math.floor(Number(audio.currentTime) / 60);
      let secs = Math.floor(Number(audio.currentTime) % 60);
      let time = `${mins}:${secs}`;
      return time;
    });
    setlength(() => {
      let mins = Math.floor(Number(audio.duration) / 60);
      let secs = Math.floor(Number(audio.duration) % 60);
      let time = `${mins}:${secs}`;
      return time;
    });
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    setscrub(percentagePosition);
  };

  const handleAudioend=()=>{
   
    let index = allSongs.findIndex((song)=> song===currentSong)

    if(index+1 <allSongs.length){
      dispatch(changeCurrentSong(allSongs[index+1]))
    }else{
      dispatch(changeCurrentSong(allSongs[0]))
    }

    setTimeout(()=>audio.play(), 1000)      
  }


  


  return (
    <div className={classes.audio}>
      <input
        ref={timelineRef}
        type="range"
        onChange={(e) => scrubSlider(e)}
        className={classes.timeline}
        max="100"
        value={scrub}
      />
      {/* <input type="file" onChange={(e) => checkSm(e)} /> */}
      <div className={classes.togglePlay} onClick={() => toggleMusic()}>
        <>{status ? <BsPlayFill /> : <BsPauseFill />}</>
      </div>
      <audio
        
        onTimeUpdate={moveSlider}
        onEnded={handleAudioend}
        ref={audioRef}
        src={currentSong.url}
      ></audio>
      <div>
        {" "}
        <p>
          {current} | {length}{" "}
        </p>
      </div>
      <div>
        <p className={classes.title}> {currentSong.title}</p>
        <p>{currentSong.album} |{currentSong.artist} </p>
      </div>
    </div>
  );
};

export default Audio;
