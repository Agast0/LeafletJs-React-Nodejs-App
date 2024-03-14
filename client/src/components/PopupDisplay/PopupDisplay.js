import './index.css';
import { IoIosSave } from "react-icons/io";

const PopupDisplay = ({ markerPosition }) => {
    return (
        <div className={'popup-display-container'}>
            <div className={'popup-display-text'}>
                {markerPosition[0].toFixed(1)}, {markerPosition[1].toFixed(1)}
            </div>
            <div className="line" />
            <div className={'popup-display-save-text-container'}><IoIosSave className={"popup-display-save-icon"}/> save</div>
        </div>
    );
}

export default PopupDisplay;
