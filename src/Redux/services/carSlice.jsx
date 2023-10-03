import { createSlice } from "@reduxjs/toolkit";



const carSlice = createSlice({
    name:"carSlice",
    initialState:{
        rentCars:[]
    },
    reducers:{
        takeRent:(state,action) => {
            const rentCar = action.payload;
            console.log(rentCar)
            state.rentCars.push(rentCar)
        }
    }
})


export const {takeRent} = carSlice.actions

export default carSlice.reducer