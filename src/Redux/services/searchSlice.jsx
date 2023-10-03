import { createSlice } from "@reduxjs/toolkit";


 const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchText:""
    },
    reducers:{
        setSearch:(state,action) => {
            console.log(state.searchText,action)
            state.searchText = action.payload
           
        },
        clearSearch:(state) => {
            state.searchText = ""
        }
    }
})


export const {setSearch,clearSearch}  = searchSlice.actions
export default searchSlice.reducer