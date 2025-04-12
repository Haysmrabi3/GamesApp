import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export let getSpecificStore = createAsyncThunk(`getSpecificGame/SpecificStoreReducer` , async (id)=>{
    try {
        let response = await axios.get(`https://api.rawg.io/api/stores/${id}?key=858fa74f1f564d0fb66691b85c3dbc44`) 
        return response.data       
    } catch (error) {
        console.error(error);
    }
})

let initialState = {
    isLoading : false , 
    isError : false , 
    StoreDetails : {}
}





let SpecificStoreReducer = createSlice({
    name : `SpecificGame` ,
    initialState , 
    extraReducers : (bulider)=> {
        bulider
            .addCase(getSpecificStore.fulfilled , function (state , actions){
                state.StoreDetails = actions.payload  
                state.isError = false 
                state.isLoading = false 
            })
            .addCase(getSpecificStore.pending , function (state){
                state.isLoading = true 
                state.isError = false 
            })
            .addCase(getSpecificStore.rejected , function (state){
                state.isLoading = false 
                state.isError = true 
            })        
    }
})


let SpecificStoreSlice = SpecificStoreReducer.reducer

 export default SpecificStoreSlice