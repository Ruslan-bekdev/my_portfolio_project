import React, {useState} from "react";
import classes from "./TodosPage.module.css";
import Input from "../../compnents/universal/UI/input/Input";
import Button from "../../compnents/universal/UI/buttons/Button";
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import {
    setInitialTodosAction,
    setTodosAction,
    setTodosErrorAction,
    setTodosLoadingStatusAction,
    setTodosSearchValueAction,
} from "../../store/todosSlice";

const TodosPage = () => {
    const dispatch = useDispatch();

    const {initialTodos,todos,searchValue,isLoading} = useSelector(state=>state.todosReducer);
    const [todoTitle,setTodoTitle] = useState('');

    const handleSearch = (value) => {
        dispatch(setTodosSearchValueAction(value));
    };
    const handleTodoStatus = (todo,setNewTodo) => {
        setNewTodo ({...todo, completed: !todo.completed});
    };
    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: todos.length+1,
            title: todoTitle,
            completed: false,
        }
        todoTitle.trim()
            ?dispatch(setInitialTodosAction([...todos,newTodo]))
            :alert('Поле не может быть пустым!');
        setTodoTitle('');
    }
    const deleteKey = (data) => {
        return data.map(todo => {
            const {userId, ...rest} = todo;
            return rest;
        })
    }

    const requestConfig = {
        requestParams:{
            url: 'https://jsonplaceholder.typicode.com/todos',
            options:{},
            method: 'fetch',
        },
        actions:{
            setInitialDataAction: setInitialTodosAction,
            setDataAction: setTodosAction,
            setLoadingStatusAction: setTodosLoadingStatusAction,
            setErrorAction: setTodosErrorAction,
        },
        selectors:{
            initialData: initialTodos,
            searchValue: searchValue,
            isLoading: isLoading,
        },
        searchingKey: 'title',
        transformData: deleteKey,
    }
    const contentConfig = {
        data: todos,
        notFoundMessage:'Todo\'s не найдены',
        isLoading,
        // loadingValue: ,
        mapper: {
            title: 'Todo:',
            completed: 'Completed:',
            id: 'id:'
        },
        functions: [
            {
                onClick: handleTodoStatus,
                label: 'Изменить статус',
                className: '',
            },
        ],
        classes: {
            body: '',
            item: classes.itemList__item,
        }
    };

    useDataState(requestConfig,dispatch);

    return (
        <div className={`${classes.wrapper} container`}>
            <h1>Задачи</h1>
            <Outlet/>
            <Input
                value={searchValue}
                setValue={handleSearch}
                placeholder='Поиск'
                customClasses={classes.searcher}
            />
            <div>
                <Input
                    value={todoTitle}
                    setValue={setTodoTitle}
                />
                <Button func={addTodo} children='Добавить'/>
            </div>
            <ContentList config={contentConfig}/>
        </div>
    );
};

export default TodosPage;