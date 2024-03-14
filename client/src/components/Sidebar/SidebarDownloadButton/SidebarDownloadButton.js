import './index.css';
import {HiDownload} from "react-icons/hi";
import {PinApiContext} from "../../Providers/PinApiProvider";
import {useContext} from "react";

function SidebarDownloadButton() {
    const { downloadPins } = useContext(PinApiContext);

    return (
        <div className={'side-bar-download-button'}>
            <div className={'side-bar-download-text'}>
                Download
            </div>
            <div className={'side-bar-download-icon'} onClick={downloadPins}>
                <HiDownload/>
            </div>
        </div>
    );
}

export default SidebarDownloadButton;
