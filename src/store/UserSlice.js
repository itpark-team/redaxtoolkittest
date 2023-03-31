import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        name: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const {setName} = userSlice.actions;
export default userSlice.reducer;