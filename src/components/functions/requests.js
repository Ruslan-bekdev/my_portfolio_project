import {useEffect, useState} from 'react';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();

                response.ok
                    ?setData(responseData)
                    :setError(
                        `Ошибка запроса на сервер! Код ошибки: ${response.status}`
                    );
            } catch (error) {
                setError(`Произошла ошибка: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return {data, error, loading};
};
