import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GamesSclice";
import SpecificGameSlice from "./SpecificGameSlice";
import StoreSlice from "./StoresSlice";
import SpecificStoreSlice from "./SpecificSroreSlice";
import CategoriesSlice from "./CategoriesSlice";
import CreatorsSlice from "./CreatorsSlice";
import SpecificCreatorSlice from "./SpecificCreatorSlice";









const Store = configureStore({
    reducer : {
        GameSlice , 
        SpecificGameSlice ,
        StoreSlice ,
        SpecificStoreSlice ,
        CategoriesSlice ,
        CreatorsSlice ,
        SpecificCreatorSlice ,
    }
})


export default Store