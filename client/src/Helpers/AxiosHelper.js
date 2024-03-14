import axios from "axios";

export const post = async (requestUrl, requestData) => {
    try {
        return await axios.post(requestUrl, requestData, makeConfig());
    } catch (error) {
        return error.response;
    }
}

export const get = async (requestUrl, requestQuery) => {
    try {
        return await axios.get(requestUrl, makeConfig(requestQuery));
    } catch (error) {
        return error.response;
    }
}

export const del = async (requestUrl, requestQuery) => {
    try {
        return await axios.delete(requestUrl, makeConfig(requestQuery));
    } catch (error) {
        return error.response;
    }
}

const makeConfig = (requestQuery) => {
    return {
        params: requestQuery,
    };
}
