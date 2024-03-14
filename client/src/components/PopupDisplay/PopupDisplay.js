import './index.css';
import { IoIosSave } from "react-icons/io";

const PopupDisplay = ({ markerPosition }) => {
    const roundedLatitude = markerPosition[0].toFixed(1);
    const roundedLongitude = markerPosition[1].toFixed(1);

    return (
        <div className={'popup-display-container'}>
            <div className={'popup-display-text'}>
                {roundedLatitude}, {roundedLongitude}
            </div>
            <div className="line" />
            <div className={'popup-display-save-text-container'}><IoIosSave className={"popup-display-save-icon"}/> save</div>
        </div>
    );
}

export default PopupDisplay;
