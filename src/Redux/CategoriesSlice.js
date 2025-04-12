import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export let getCategories = createAsyncThunk(`CategoriesReducer/getgetCategories` , async (cat)=> {
    try {        
        let response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` , {
            params: {
                category : cat,
              },
              headers: {
                "X-RapidAPI-Key": "d73fc0f9b2msh2c8a927576ea39cp1987e9jsn7974edf0185f",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
              },
        })
        return response.data        
    } catch (error) {
        console.error(error)
    }
})

const initialState = {
    isLoading : false , 
    isError : false , 
    Categories : []
}


let CategoriesReducer = createSlice({
    name : `CategoriesReducer` , 
    initialState , 
    extraReducers : (bulider) => {
        bulider
        .addCase(getCategories.fulfilled , (state , actions)=> {
            state.Categories = actions.payload
            state.isError = false  
            state.isLoading = false  
        })
        .addCase(getCategories.pending , (state)=> {
            state.isLoading = true  
            state.isError = false  
        })
        .addCase(getCategories.rejected , (state)=> {
            state.isError = true  
            state.isLoading = false  
        })
    }
})

let CategoriesSlice = CategoriesReducer.reducer

export default CategoriesSlice