import { useState, useEffect } from 'react';

export const useFetch = (BASE_URL = '', error_msg = 'An error has ocurred getting the data') => {
    const [fetch_data, setFetchData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const action = () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await window.fetch(BASE_URL);
                if (!response.ok) {
                    const { message } = await response.json()
                    throw new Error(message);
                }
                const {data} = await response.json()
                setFetchData(data);
                setError(null);
            } catch (error) {
                setError(error.message || error_msg)
            }
            setLoading(false);
        }
        fetchData();
    }
    
    return { data: fetch_data, loading, error, action };
}