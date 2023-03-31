import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosSlice",
    initialState: {
        todos: []
    },
    reducers: {
        todoAddNew: (state, action) => {
            state.todos.push(action.payload);
        },
        todoDeleteById: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const {todoAddNew, todoDeleteById} = todosSlice.actions;
export default todosSlice.reducer;