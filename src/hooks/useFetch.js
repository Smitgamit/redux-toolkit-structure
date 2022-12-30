import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, method, body = {}, isMultipart = false, token = '') => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        let headers;
        isMultipart ? headers = { "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>" }
            : headers = { "Content-Type": "application/json" };
        if (token !== '') headers.Authorization = `Bearer ${token}`
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios({
                    url: url,
                    method: method,
                    headers,
                    data: body
                });
                const data = await resp?.data;
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, method]);

    return [data, isLoading, serverError];
};

export default useFetch;