import React, {useEffect, useState} from "react";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import Searcher from "../../compnents/universal/UI/searcher/Searcher";
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import classes from "./TodosPage.module.css";

const TodosPage = () => {
    const {searchInput, setSearchInput, loadingStatus, data} = useDataState(
        'https://jsonplaceholder.typicode.com/todos',
        'title',
        data => data,
    );

    const todoStatus = (item,setNewItem) => {
        setNewItem ({...item, completed: !item.completed})
    }

    const contentConfig = {
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
        ],
        classes: {
            list: classes.itemList,
            item: classes.itemList__item,
        }
    };

    return (
        <div className={`${classes.wrapper} container`}>
            <Searcher
                search={searchInput}
                setSearch={setSearchInput}
                customClasses={classes.searcher}
            />
            <ContentList
                data={data}
                contentConfig={contentConfig}
                loading={loadingStatus}
                customClasses={contentConfig.classes.list}
                contentType={'products'}
            />
        </div>
    );
};

export default TodosPage;