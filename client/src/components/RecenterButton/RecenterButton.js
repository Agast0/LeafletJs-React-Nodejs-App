import { FaLocationCrosshairs } from "react-icons/fa6";
import './index.css';

function RecenterButton({handleRecenter}) {
    return (
        <div className={'recenter'} onClick={handleRecenter}>
            <FaLocationCrosshairs/>
        </div>
    );
}

export default RecenterButton;
