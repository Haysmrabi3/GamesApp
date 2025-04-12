import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getGames = createAsyncThunk('GamesReducer/"getGames', async function () {
    try {
      const response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games" , {
        headers : {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": "d0eb650f8bmshc09e28a7bca70cfp1f2b19jsn554f89eb36c8",
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });



const initialState = {
    isLoading : false , 
    isError : false , 
    games : []
}


let GamesReducer = createSlice({
    name : `GamesReducer` , 
    initialState , 
    reducers : {},
    extraReducers : (bulider) => {
        //Susses
        bulider
          .addCase(getGames.fulfilled, function (state, actions) {
            state.games = actions.payload , 
            state.isError = false;
            state.isLoading = false 
          })
    
          //Loading
          .addCase(getGames.pending, function (state, actions) {
            state.isLoading = true;
            state.isError = false;
          })
          //Error
          .addCase(getGames.rejected, function (state, actions) {
            state.isLoading = false;
            state.isError = true;
          });
      },
})

let GameSlice =  GamesReducer.reducer;

export default  GameSlice
