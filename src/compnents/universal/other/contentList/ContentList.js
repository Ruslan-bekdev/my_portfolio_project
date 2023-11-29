import React from "react";
import Card from "../card/Card";
import DataUnavailablePlaceholder from "../dataUnavailablePlaceholder/DataUnavailablePlaceholder";

export const ContentList = ({data,loading,customClasses = '',contentType = '',contentConfig}) => {
    let listContent;

    const emptyMessage = {
        products: 'Товары не найдены',
        comments: 'Комментарии не найдены',
    }

    if (loading){
        listContent = <p>Загрузка...</p>;
    } else if (!data.length){
        listContent = <p>{emptyMessage[contentType]}</p>||<p>Комментарии не найдены</p>;
    } else if (typeof data[0] !== "object"){
        listContent = <DataUnavailablePlaceholder/>
        console.log('iem is not Object');
    } else{
        listContent = data.map((item, index) => (
            <Card item={item} contentConfig={contentConfig} customClasses={contentConfig.classes.item} key={index}/>
        ));
    }

    return(
        <div className={customClasses}>
            {listContent}
        </div>
    )
};
