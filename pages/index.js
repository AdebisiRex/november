import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GrCloudDownload, GrCloud } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import jsmediatags from "jsmediatags";
import { changeUrlArray } from "../redux/urlRedux";
import sqi from "../resources/SQILogo.webp";
import nmLogo from "../resources/nm-logo.png";
import { useState, useEffect } from "react";



export default function Home() {
  const [loading, setloading] = useState(true);
  let router = useRouter();
  let dispatch = useDispatch();

  let urlArray = useSelector((state) => state.url.urlArray);

  const clickInput = () => {
    let inputId = document.getElementById("inputId");
    inputId.click();
  };
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);
  const getSongs = (e) => {
    setloading(true);
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
          router.push("/displaySongs");
        },
        onError: (err) => {
          console.log(err);
        },
      });
    }
  };

  if (loading) {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.loadingDiv}>
            <Image src={nmLogo} width={250} alt="November Music Logo" />
            <p>Loading...</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <Image src={nmLogo} width={150} alt="November Music Logo" />
          <h1 className={styles.description}>
            {" "}
            Build A Project in November Challenge
          </h1>
          <p className={styles.code}>Organized by SQI College of ICT</p>

          <div className={styles.grid}>
            <div onClick={clickInput} className={styles.card}>
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
              <h1 className={styles.title}>
                <GrCloudDownload />
              </h1>
              <h1>Local Files</h1>
            </div>
            {/* <div className={styles.card}>
              <h1 className={styles.title}>
                <GrCloud />
              </h1>
              <h1>Play Online</h1>
            </div> */}
          </div>
        </main>
      </div>
    );
  }
}
