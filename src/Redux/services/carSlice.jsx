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
        removeFromList: (state, action) => {
            const { id, name } = action.payload;
            console.log(name, action.payload)
            if (name === "rent") {
                state.rentCars = state.rentCars.filter(car => car.id !== id)
            }
            if(name === "fav"){
                state.favouriteCars = state.favouriteCars.filter(car => car.id !== id)
            }

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
    },

})


export const { takeRent,  addToFavourite, removeFromList } = carSlice.actions

export default carSlice.reducer