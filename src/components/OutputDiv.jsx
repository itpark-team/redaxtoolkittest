import React from 'react';
import {useSelector} from "react-redux";

const OutputDiv = () => {

    const name = useSelector(state => state.user.name);

    return (
        <div>
            <h2>Ваше имя:</h2>
            <b>{name}</b>
        </div>
    );
};

export default OutputDiv;