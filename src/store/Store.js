import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import TodosSlice from "./TodosSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        todosList: TodosSlice
    }
})