import jsmediatags from "jsmediatags";
import { changeUrlArray } from "../redux/urlRedux";
import styles from "../styles/Home.module.css"

import { useDispatch } from "react-redux";

import React from "react";

const CallSongs = () => {
  let dispatch = useDispatch()
  const getSongs = (e) => {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      let thisFile = files[i];
      let url = URL.createObjectURL(thisFile);

      jsmediatags.read(thisFile, {
        onSuccess: (tag) => {
          const { data, format } = tag.tags.picture;
          const { title, album, artist } = tag.tags;

          let base64String = "";
          for (let a = 0; a < data.length; a++) {
            base64String += String.fromCharCode(data[i]);
          }

          let art = `url(data:${format};base64,${window.btoa(base64String)})`;
          let arrObject = { url, art, artist, title, album };

          dispatch(changeUrlArray(arrObject));
         
        },
        onError: (err) => {
          console.log(err);
        },
      });
    }
  };

  return (
    <>
      <input
        id="inputId"
        className={styles.inputFile}
        onChange={(e) => getSongs(e)}
        type="file"
        webkitdirectory="true"
        msdirectory="true"
        odirectory="true"
        directory="true"
        multiple
        accept="audio/mp3, audio/m4a, audio/wav"
      />
    </>
  );
};

export default CallSongs;
