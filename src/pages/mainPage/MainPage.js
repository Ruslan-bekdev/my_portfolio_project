import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import Button from "../../compnents/universal/UI/buttons/Button";
import {changeTextAction} from "../../redux/actions/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const text = useSelector(state => state.textReducer.text);

    const changeText = () => {
        dispatch(changeTextAction())
    }

    return (
        <div className='container'>
            <h1>Главная</h1>
            <p>{text}</p>
            <Button func={changeText} children='Нажми на меня, чтобы изменить текст'/>
        </div>
    );
};

export default MainPage;