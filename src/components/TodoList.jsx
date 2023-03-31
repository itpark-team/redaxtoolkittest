import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todoDeleteById} from "../store/TodosSlice";

const TodoList = () => {

    const todos = useSelector(state => state.todosList.todos);
    const dispatch = useDispatch();

    return (
        <div>
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