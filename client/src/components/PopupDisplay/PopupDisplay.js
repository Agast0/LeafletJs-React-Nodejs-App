import './index.css';
import { IoIosSave } from "react-icons/io";

const PopupDisplay = ({ markerPosition }) => {
    const roundedLatitude = markerPosition[0].toFixed(1);
    const roundedLongitude = markerPosition[1].toFixed(1);

    return (
        <div className={'popup-display-container'}>
            {roundedLatitude}, {roundedLongitude}
            <div className="line"></div>
            <div className={'popup-display-save-text-container'}><IoIosSave className={"popup-display-save-icon"}/> save</div>
        </div>
    );
}

export default PopupDisplay;
