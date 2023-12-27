import React from 'react';
import DataUnavailablePlaceholder from "../dataUnavailablePlaceholder/DataUnavailablePlaceholder";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Button from "../../UI/buttons/Button";

const TableContent = ({config}) => {
    const {
        data,notFoundMessage,isLoading,loadingValue,
        mapper,functions,classes
    } = config;
    const renderTableHeader = () => {
        return (
            <tr>
                 {Object.values(mapper).map((value, index) => (
                     <th key={value.id||index}>{value}</th>
                 ))}
             </tr>
         );
     };

    const renderButtons = (item) => {
        return functions.map((func, funcIndex) => (
            <Button
                func={() => func.onClick(item)}
                children={func.label}
                key={funcIndex}
            />
        ));
    };

    const renderTableRows = (item,index) => {
         return(
             <tr key={index}>
                 {Object.keys(mapper).map((key, index) => (
                     <td key={index}>{item[key]}</td>
                 ))}
                 {functions.length && <td>{renderButtons(item)}</td>}
             </tr>
         )
     };

    let tableContent;

    if (isLoading){
     tableContent = <LoadingSpinner value={loadingValue&&loadingValue}/>;
    } else if (!data.length){
     tableContent = <p>{notFoundMessage||'Данные не найдены'}</p>;
    } else if (typeof data[0] !== 'object'){
     tableContent = <DataUnavailablePlaceholder/>;
     console.log('Ошибка: Данные не являются объектами');
    } else {
        tableContent = (
            <table>
                <thead>{renderTableHeader()}</thead>
                <tbody>
                    {
                        data.map((item,index) =>
                            renderTableRows(item,index))
                    }
                </tbody>
            </table>
        );
    }

    return <div className={classes.body}>{tableContent}</div>;
 };

 export default TableContent;
