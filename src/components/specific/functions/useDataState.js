import {useState, useEffect} from 'react';
import {useFetch,useAxios} from '../../universal/functions/requests';

export const useDataState = (config, dispatch) => {
    const [fetchError, setFetchError] = useState('');
    const {selectors, actions, requestParams, transformData, searchingKey} = config;

    const fetchData = () => {
        if (!config.selectors.initialData.length){
            const requestFunction = {
                fetch: useFetch,
                axios: useAxios,
            }

            requestFunction[requestParams.method](requestParams.url,requestParams.options)
                .then(({status, data, error}) => {
                    if (status !== 200) return setFetchError(error);
                    const modifiedData = transformData
                        ?transformData(data)
                        :data;
                    console.log(modifiedData)
                    dispatch(actions.setInitialDataAction(modifiedData));
                })
                .finally(() => {
                    dispatch(actions.setLoadingStatusAction(false))
                });
        }
    };
    const getFilteredData = () => {
        let newData = searchingKey
            ?selectors.initialData.filter(item =>
                item[searchingKey].includes(selectors.searchValue.trim()))
            :selectors.initialData
        dispatch(actions.setDataAction(newData))
    }

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        getFilteredData();
    }, [selectors.searchValue,selectors.initialData]);
    useEffect(() => {
        fetchError && alert(fetchError);
    }, [fetchError]);
};
