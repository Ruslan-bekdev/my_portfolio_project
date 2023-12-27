import React from "react";
import Card from "../card/Card";
import DataUnavailablePlaceholder from "../dataUnavailablePlaceholder/DataUnavailablePlaceholder";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

export const ContentList = ({config}) => {
    const {
        data,notFoundMessage,isLoading,loadingValue,
        mapper,functions,classes
    } = config;
    let listContent;

    if (isLoading){
        listContent = <LoadingSpinner value={loadingValue && loadingValue}/>;
    } else if (!data.length){
        listContent = <p>{notFoundMessage || 'Данные не найдены'}</p>;
    } else if (typeof data[0] !== "object"){
        listContent = <DataUnavailablePlaceholder/>
        console.log('Ошибка: Данные не являются объектами');
    } else{
        listContent = data.map((item, index) => (
            <Card
                item={item} config={config} key={item.id||index}
            />
        ));
    }

    return <div className={classes.body}>{listContent}</div>
};
