import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export let getStores = createAsyncThunk(`StorReducer/getStores` , async ()=> {
    try {
        let response = await axios.get(`https://api.rawg.io/api/stores?key=858fa74f1f564d0fb66691b85c3dbc44`)
        return response.data.results
    } catch (error) {
        console.error(error)
    }
})

const initialState = {
    isLoading : false , 
    isError : false , 
    Stores : []
}


let StorReducer = createSlice({
    name : `StorReducer` , 
    initialState , 
    extraReducers : (bulider) => {
        bulider
        .addCase(getStores.fulfilled , (state , actions)=> {
            state.Stores = actions.payload
            state.isError = false  
            state.isLoading = false  
        })
        .addCase(getStores.pending , (state)=> {
            state.isLoading = true  
            state.isError = false  
        })
        .addCase(getStores.rejected , (state)=> {
            state.isError = true  
            state.isLoading = false  
        })
    }
})

let StoreSlice = StorReducer.reducer

export default StoreSlice