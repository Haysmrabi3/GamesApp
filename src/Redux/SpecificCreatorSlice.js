import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getSpecificCreator = createAsyncThunk(`getSpecificCreator/SpecificCreatorReducer` , async (id)=>{
    try {
        let response = await axios.get(`https://api.rawg.io/api/creators/${id}?key=858fa74f1f564d0fb66691b85c3dbc44`) 
        return response.data       
    } catch (error) {
        console.error(error);
    }
})

let initialState = {
    isLoading : false , 
    isError : false , 
    CreatorDetails : {}
}





let SpecificCreatorReducer = createSlice({
    name : `SpecificCreator` ,
    initialState , 
    extraReducers : (bulider)=> {
        bulider
            .addCase(getSpecificCreator.fulfilled , function (state , actions){
                state.CreatorDetails = actions.payload  
                state.isError = false 
                state.isLoading = false 
            })
            .addCase(getSpecificCreator.pending , function (state){
                state.isLoading = true 
                state.isError = false 
            })
            .addCase(getSpecificCreator.rejected , function (state){
                state.isLoading = false 
                state.isError = true 
            })        
    }
})


let SpecificCreatorSlice = SpecificCreatorReducer.reducer

 export default SpecificCreatorSlice