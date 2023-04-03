import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todosServLoad} from "../store/TodosServSlice";

const TodoListServ = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosServSlice.todos);

    return (
        <div>
            <div>
                <button onClick={() => dispatch(todosServLoad())}>загрузить список дел</button>
            </div>
            {
                todos.length === 0
                    ? <div>данных нет</div>
                    : todos.map(todo =>
                        <div>
                            {todo.id} | {todo.date} | {todo.description}
                        </div>
                    )

            }
        </div>
    );
};

export default TodoListServ;