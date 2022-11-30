import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: { url: "", currentSong: {}, urlArray: [] },
  reducers: {
    changeUrl: (state, action) => {
      state.url = action.payload;
      state.currentSong = state.urlArray.filter(
        (item) => item.url === state.url
      );
      console.log(state.currentSong);
    },
    changeUrlArray: (state, action) => {
      state.urlArray = [...state.urlArray, action.payload];
      state.currentSong = state.urlArray[0]
      
    },
    changeCurrentSong: (state, action)=>{
      state.currentSong = action.payload
    }
  },
});

export const { changeUrl, changeUrlArray, changeCurrentSong } = urlSlice.actions;
export default urlSlice.reducer;
