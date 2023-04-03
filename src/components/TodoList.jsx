import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initTodos, todoDeleteById, todosSlice} from "../store/TodosSlice";
import axios from "axios";
import {store} from "../store/Store";

const TodoList = () => {

    const todos = useSelector(state => state.todosList.todos);
    const dispatch = useDispatch();

    const loadTodosFromServer = () => {
        try {
            console.log("loading")

            axios.get("http://localhost:8080/todos/getAll").then(response => {
                console.log("loaded");
                dispatch(initTodos(response.data));
            });
        } catch (e) {
            console.log("errror " + e.message);
        }

    }

    return (
        <div>
            <button onClick={loadTodosFromServer}>Load From Server</button>
            <h2>Список задач</h2>
            {
                todos.map(todo =>
                    <div key={todo.id}>
                        <p>{todo.text}</p>
                        <p>
                            {
                                todo.status
                                    ? <b>выполнено</b>
                                    : <b>невыполнено</b>
                            }
                        </p>
                        <p>
                            <button onClick={() => dispatch(todoDeleteById(todo.id))}>Delete</button>
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default TodoList;