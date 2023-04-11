


import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: "Explore",

    reducers: {
        setNav: (state, action) => {
            console.log("navigation set to " + action.payload);
            // state.active = !state.active
            return action.payload;
        },
    }
});
export const {setNav} = navSlice.actions
export default navSlice.reducer;