import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import TodosSlice from "./TodosSlice";
import TodosServSlice, {todosServSlice} from "./TodosServSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        todosList: TodosSlice,
        todosServSlice: TodosServSlice
    }
})