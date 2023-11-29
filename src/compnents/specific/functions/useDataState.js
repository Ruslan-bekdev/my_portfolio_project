import {useState, useEffect} from 'react';
import {fetchRequest} from '../../universal/_functions/fetchRequest';

export const useDataState = (url,searchingKey, transformData) => {
    const [initialData, setInitialData] = useState([]);
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [fetchError, setFetchError] = useState('');

    const fetchData = ()=>{
        fetchRequest(url)
            .then(({status, data, error}) => {
                if (status !== 200) return setFetchError(error);
                const modifiedData = transformData(data);
                setInitialData(modifiedData);
            })
            .finally(() => {
                setLoadingStatus(false);
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
    }, [searchInput,initialData]);

    const getFilteredData = () => {
        let newData;
        loadingStatus
            ?newData = []
            :newData = initialData.filter(item =>
                item[searchingKey].includes(searchInput.trim())
            );
        setData(newData);
    }

    return {searchInput, setSearchInput, loadingStatus, data};
};
