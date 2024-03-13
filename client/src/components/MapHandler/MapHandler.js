import {useMapEvents} from "react-leaflet";

const MapHandler = ({ setMarkerPosition }) => {
    const map = useMapEvents({
        click(e) {
            const clickedPosition = [e.latlng.lat, e.latlng.lng];
            setMarkerPosition(clickedPosition);
            map.setView(clickedPosition, map.getZoom());
        },
    });
    return null;
};

export default MapHandler;