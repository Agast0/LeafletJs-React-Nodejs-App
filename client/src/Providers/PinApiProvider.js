import React, { createContext, useState, useEffect } from 'react';
import {handleAddPin, handleGetPins, handleRemovePin} from "../Helpers/ApiHelper";
import toast from "react-hot-toast";

export const PinApiContext = createContext();

const PinApiProvider = ({ children }) => {
    const [previousPins, setPreviousPins] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const addPin = async (lat, lng) => {
        const pinObject = {
            lat: lat.toString(),
            lng: lng.toString(),
            datetime: new Date().toISOString()
        };

        const loadingToast = toast.loading('Adding pin...');
        setLoading(true)

        let res = await handleAddPin(pinObject);

        toast.remove(loadingToast);

        if (res.status === 200) {
            setPreviousPins([...previousPins, res.data]);
            toast.success('Pin added successfully');
        } else {
            toast.error(res.data.message);
        }

        setLoading(false)
    };

    const getPins = async () => {
        setLoading(true)
        let res = await handleGetPins();

        if (res.status === 200) {
            setPreviousPins(res.data);
        } else {
            toast.error(res.data.message);
        }

        setLoading(false)
    };

    const removePin = async (pinId) => {
        const loadingToast = toast.loading('Removing pin...');
        setLoading(true)

        let res = await handleRemovePin(pinId);

        toast.remove(loadingToast);

        if (res.status === 200) {
            setPreviousPins(previousPins.filter(pin => pin.id !== pinId));
            toast.success('Pin removed successfully');
        } else {
            toast.error(res.data.message);
        }

        setLoading(false)
    };

    const downloadPins = () => {
        const json = JSON.stringify(previousPins);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pins.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
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
