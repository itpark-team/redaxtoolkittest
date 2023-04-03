import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todosSlice",
    initialState: {
        todos: []
    },
    reducers: {
        initTodos: (state, action) => {
            state.todos = action.payload;
        },
        todoAddNew: (state, action) => {
            state.todos.push(action.payload);
        },
        todoDeleteById: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const {todoAddNew, todoDeleteById, initTodos} = todosSlice.actions;
export default todosSlice.reducer;