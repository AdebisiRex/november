import "../styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import urlReducer from "../redux/urlRedux";
import Head from "next/head"

let store = configureStore({
  reducer: { url: urlReducer },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>November Music</title>
        <meta name="description" content="Designed by Rex for #Sqichallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
