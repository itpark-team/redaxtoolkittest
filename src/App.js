import './App.css';

import React from 'react';
import InputForm from "./components/InputForm";
import OutputDiv from "./components/OutputDiv";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
    return (
        <div>
            <InputForm/>
            <OutputDiv/>
            <hr/>
            <hr/>
            <hr/>
            <TodoList/>
            <AddTodoForm/>
        </div>
    );
};

export default App;