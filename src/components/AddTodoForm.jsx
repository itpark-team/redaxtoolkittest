import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {todoAddNew} from "../store/TodosSlice";

const AddTodoForm = () => {

    let [inputTodo, setInputTodo] = useState({
        text: "",
        status: true
    });

    const dispatch = useDispatch();

    const handleAddNew = () => {
        let todo = {
            id: v4(),
            text: inputTodo.text,
            status: inputTodo.status
        }

        dispatch(todoAddNew(todo));
    }

    return (
        <div>
            <div>
                <p>
                    введите текст задачи:
                    <input type="text" value={inputTodo.text}
                           onChange={event => setInputTodo({...inputTodo, text: event.target.value})}/>
                </p>
                <p>
                    выберите статус задачи (выполнена или не выполнена):
                    <input type="checkbox" checked={inputTodo.status}
                           onChange={event => setInputTodo({...inputTodo, status: event.target.checked})}/>
                </p>
                <p>
                    <button onClick={handleAddNew}>Добавить новую задачу</button>
                </p>
            </div>
        </div>
    );
};

export default AddTodoForm;