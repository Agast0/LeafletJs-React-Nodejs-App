import './index.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useRef } from "react";
import MapClickHandler from "../MapClickHandler/MapClickHandler";
import PopupDisplay from "../PopupDisplay/PopupDisplay";
import RecenterButton from "../RecenterButton/RecenterButton";
import Sidebar from "../Sidebar/Sidebar";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Map() {
    const [markerPosition, setMarkerPosition] = useState([41.0082, 28.9784]);
    const mapRef = useRef();

    const handleMarkerDragEnd = (e) => {
        setMarkerPosition([e.target._latlng.lat, e.target._latlng.lng]);
        const map = e.target._map;
        if (map) {
            map.setView(e.target._latlng, map.getZoom());
        }
    };

    const handleRecenter = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setMarkerPosition([latitude, longitude]);
            mapRef.current.flyTo([latitude, longitude], 13);
        }, (error) => {
            console.error('Error getting current position:', error);
        });
    };

    const initMap = (mapInstance) => {
        mapRef.current = mapInstance.target
        handleRecenter()
    }

    const setPinLocation = (lat, lng) => {
        setMarkerPosition([lat, lng]);
        mapRef.current.flyTo([lat, lng], mapRef.current.getZoom());
    }

    return (
        <>
            <RecenterButton handleRecenter={handleRecenter} />
            <MapContainer center={markerPosition} zoom={13} scrollWheelZoom={true} whenReady={initMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapClickHandler setMarkerPosition={setMarkerPosition} />
                <Marker position={markerPosition} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }}>
                    <Popup>
                        <PopupDisplay markerPosition={markerPosition} />
                    </Popup>
                </Marker>
            </MapContainer>
            <Sidebar setPinLocation={setPinLocation}/>
        </>
    );
}
export default Map;
