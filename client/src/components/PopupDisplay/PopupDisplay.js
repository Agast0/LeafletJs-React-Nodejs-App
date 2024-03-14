import './index.css';
import { IoIosSave } from "react-icons/io";
import {PinApiContext} from "../Providers/PinApiProvider";
import {useContext} from "react";

const PopupDisplay = ({ markerPosition }) => {
    const { addPin } = useContext(PinApiContext);

    return (
        <div className={'popup-display-container'}>
            <div className={'popup-display-text'}>
                {markerPosition[0].toFixed(1)}, {markerPosition[1].toFixed(1)}
            </div>
            <div className="line" />
            <div className={'popup-display-save-text-container'} onClick={() => addPin(markerPosition)}><IoIosSave className={"popup-display-save-icon"}/> save</div>
        </div>
    );
}

export default PopupDisplay;
