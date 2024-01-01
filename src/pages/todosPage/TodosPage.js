import React, {useEffect, useState} from "react";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import Searcher from "../../compnents/universal/UI/searcher/Searcher";
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import classes from "./TodosPage.module.css";
import {useNavigate} from "react-router-dom";

const TodosPage = () => {
    const {searchValue, setSearchValue, isLoading, data} = useDataState(
        'https://jsonplaceholder.typicode.com/todos',
        'title',
        data => data,
        {},
        'axios',
    );


    const todoStatus = (item,setNewItem) => {
        setNewItem ({...item, completed: !item.completed})
    }
    const navigate = useNavigate();
    const showTodo = (item) => {
        navigate(`/todos/${item.id}`);
    }

    const contentConfig = {
        notFoundMessage:'Todo\'s не найдены',
        mapper: {
            title: 'Todo:',
            completed: 'Completed:'
        },
        functions: [
            {
                onClick: todoStatus,
                label: 'click',
                className: '',
            },
            {
                onClick: showTodo,
                label: 'show',
                className: ''
            }
        ],
        classes: {
            item: classes.itemList__item,
        }
    };

    return (
        <div className={`${classes.wrapper} container`}>
            <Searcher
                search={searchValue}
                setSearch={setSearchValue}
                customClasses={classes.searcher}
            />
            <ContentList
                data={data}
                contentConfig={contentConfig}
                isLoading={isLoading}
                customClasses={contentConfig.classes.list}
            />
        </div>
    );
};

export default TodosPage;