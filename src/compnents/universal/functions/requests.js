import React from "react";
import axios from "axios";

export const useFetch = async (url,options = {}) => {
    let result = {status: 0, error: null, data: null};

    try {
        const response = await fetch(url,options);
        const responseData = await response.json();
        result.status = response.status;

        if (response.ok) {
            result.data = responseData;
        } else {
            result.error = `Ошибка запроса на сервер! Код ошибки: ${response.status}`;
        }

    } catch (error) {
        result.error = `Произошла ошибка: ${error.message}`;
    }

    return result;
};

export const useAxios = async (url,options = {}) => {
    let result = {status: 0, error: null, data: null};

    try {
        const response = await axios(url, options);
        result.status = response.status;

        if (response.status >= 200 && response.status < 300) {
            result.data = response.data;
        } else {
            result.error = `Ошибка запроса на сервер! Код ошибки: ${response.status}`;
        }

    } catch (error) {
        result.error = `Произошла ошибка: ${error.message}`;
    }

    return result;
};