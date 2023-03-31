import React from 'react';
import {useDispatch} from "react-redux";
import {setName} from "../store/UserSlice";

const InputForm = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Введите ваше имя</h2>
            <input type="text" onChange={event => dispatch(setName(event.target.value))}/>
        </div>
    );
};

export default InputForm;