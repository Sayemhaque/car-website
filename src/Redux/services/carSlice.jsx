import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        rentCars: [],
        favouriteCars: [],
    },
    reducers: {
        takeRent: (state, action) => {
            const rentCar = action.payload;
            const alredyAdded = state.rentCars.find(car => car.id === rentCar.id)
            if (alredyAdded) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alredy Added',
                  })
            } else {
                state.rentCars.push(rentCar)
                 Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        },
        removeRentItem: (state, action) => {
            const itemId = action.payload;
            state.rentCars = state.rentCars.filter(car => car.id !== itemId) 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        },
        addToFavourite: (state, action) => {
            const favCar = action.payload;
            const alredyAdded = state.favouriteCars.find(car => car.id === favCar.id)
            if (alredyAdded) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Alredy Added',
                  })
            }
            else {
                state.favouriteCars.push(favCar)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added To Favourite',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        },
        removeFavItem: (state, action) => {
            const itemId = action.payload;
            state.favouriteCars = state.favouriteCars.filter(car => car.id !== itemId)
        }
    },

})


export const { takeRent, removeRentItem, addToFavourite, removeFavItem } = carSlice.actions

export default carSlice.reducer