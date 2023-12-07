import {useState, useEffect} from 'react';
import {useFetch,useAxios} from '../../universal/functions/requests';

export const useDataState = (url,searchingKey,transformData,options={},requestMethod = 'fetch') => {
    const [initialData, setInitialData] = useState([]);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState('');

    const fetchData = ()=>{
        const requestFunction =
            requestMethod === 'fetch'.toLowerCase()
                ?useFetch :useAxios;

        requestFunction(url,options)
            .then(({status, data, error}) => {
                if (status !== 200) return setFetchError(error);
                const modifiedData = transformData(data);
                setInitialData(modifiedData);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        getFilteredData()
    }, []);

    useEffect(() => {
        fetchError && alert(fetchError);
    }, [fetchError]);

    useEffect(() => {
        getFilteredData();
    }, [searchValue,initialData]);

    const getFilteredData = () => {
        let newData;
        isLoading
            ?newData = []
            :newData = initialData.filter(item =>
                item[searchingKey].includes(searchValue.trim())
            );
        setData(newData);
    }

    return {searchValue, setSearchValue, isLoading, data};
};
