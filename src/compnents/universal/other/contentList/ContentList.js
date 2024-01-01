import React from "react";
import Card from "../card/Card";
import DataUnavailablePlaceholder from "../dataUnavailablePlaceholder/DataUnavailablePlaceholder";

export const ContentList = ({data,isLoading,customClasses = '',contentConfig}) => {
    let listContent;

    if (isLoading){
        listContent = <p>Загрузка...</p>;
    } else if (!data.length){
        listContent = <p>{contentConfig.notFoundMessage}</p>||<p>Комментарии не найдены</p>;
    } else if (typeof data[0] !== "object"){
        listContent = <DataUnavailablePlaceholder/>
        console.log('iem is not Object');
    } else{
        listContent = data.map((item, index) => (
            <Card
                item={item} contentConfig={contentConfig}
                customClasses={contentConfig.classes.item} key={index}
            />
        ));
    }

    return(
        <div className={customClasses}>
            {listContent}
        </div>
    )
};
