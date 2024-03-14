import React, { createContext, useState, useEffect } from 'react';

export const PinApiContext = createContext();

const PinApiProvider = ({ children }) => {
    const [previousPins, setPreviousPins] = useState([{
        "id":0,
        "lat": "37.05612",
        "lng": "29.10999",
        "datetime": "2021-08-14T06:35:13Z",
    },{
        "id":1,
        "lat": "33.61441",
        "lng": "32.29111",
        "datetime": "2021-08-14T07:22:15Z",
    }]);
    const [isLoading, setLoading] = useState(true);

    const addPin = (pinData) => {

    };

    const getPins = () => {

    };

    const removePin = (pinId) => {

    };

    const downloadPins = () => {

    };

    useEffect(() => {
        getPins();
    }, []);

    return (
        <PinApiContext.Provider
            value={{ previousPins, isLoading, addPin, getPins, removePin, downloadPins }}>
            {children}
        </PinApiContext.Provider>
    );
};

export default PinApiProvider;