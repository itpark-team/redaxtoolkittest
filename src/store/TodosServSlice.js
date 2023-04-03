import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {todosSlice} from "./TodosSlice";

export const todosServLoad = createAsyncThunk(
    "todos/getAll",
    async (dispatch) => {
        let response = await axios.get("http://localhost:8080/todos/getAll");
        return response.data;
    }
)

export const todosServSlice = createSlice({
    name: "todosServSlice",
    initialState: {
        todos: []
    },
    reducers: {
    },
    extraReducers: {
        [todosServLoad.fulfilled]: (state, action) => {
            state.todos = action.payload;
        },
        [todosServLoad.pending]: (state) => {
            console.log("todosServLoad is loading");
        },
        [todosServLoad.rejected]: (state, action) => {
            console.log(action.payload)
        }
    }
});

export default todosServSlice.reducer;