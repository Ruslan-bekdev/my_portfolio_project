import React from 'react';

export const fetchRequest = async (url,options = {}) => {
    let result = {status: 0, error: null, data: null};

    try {
        const response = await fetch(url,options = {});
        result.status = response.status;

        if (response.ok) {
            result.data = await response.json();
        } else {
            result.error = `Ошибка запроса на сервер! Код ошибки: ${response.status}`;
        }

    } catch (error) {
        result.error = `Произошла ошибка: ${error.message}`;
    }

    return result;
};