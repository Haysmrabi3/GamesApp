import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getSpecificGame = createAsyncThunk(`getSpecificGame/SpecificGameReducer` , async (id)=>{
    try {
        let response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , {
            headers : {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "d0eb650f8bmshc09e28a7bca70cfp1f2b19jsn554f89eb36c8",
            }
        }) 
        return response.data       
    } catch (error) {
        console.error(error);
    }
})

let initialState = {
    isLoading : false , 
    isError : false , 
    gameDetails : {}
}





let SpecificGameReducer = createSlice({
    name : `SpecificGame` ,
    initialState , 
    extraReducers : (bulider)=> {
        bulider
            .addCase(getSpecificGame.fulfilled , function (state , actions){
                state.gameDetails = actions.payload  
                state.isError = false 
                state.isLoading = false 
            })
            .addCase(getSpecificGame.pending , function (state){
                state.isLoading = true 
                state.isError = false 
            })
            .addCase(getSpecificGame.rejected , function (state){
                state.isLoading = false 
                state.isError = true 
            })        
    }
})


let SpecificGameSlice = SpecificGameReducer.reducer

 export default SpecificGameSlice