import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getCreators = createAsyncThunk('CreatorsReducer/"getCreators', async function () {
    try {
      const response = await axios.get("https://api.rawg.io/api/creators?key=858fa74f1f564d0fb66691b85c3dbc44");
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  });



const initialState = {
    isLoading : false , 
    isError : false , 
    Creators : []
}


let CreatorsReducer = createSlice({
    name : `CreatorsReducer` , 
    initialState , 
    reducers : {},
    extraReducers : (bulider) => {
        //Susses
        bulider
          .addCase(getCreators.fulfilled, function (state, actions) {
            state.Creators = actions.payload , 
            state.isError = false;
            state.isLoading = false 
          })
    
          //Loading
          .addCase(getCreators.pending, function (state) {
            state.isLoading = true;
            state.isError = false;
          })
          //Error
          .addCase(getCreators.rejected, function (state) {
            state.isLoading = false;
            state.isError = true;
          });
      },
})

let CreatorsSlice =  CreatorsReducer.reducer;

export default  CreatorsSlice
