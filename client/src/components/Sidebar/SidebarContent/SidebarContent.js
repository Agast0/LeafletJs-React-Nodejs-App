import './index.css';
import {useState} from "react";
import SidebarPin from "../SidebarPin/SidebarPin";

function SidebarContent({setIsSidebarOpen, setPinLocation}) {
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
    }
    ])

    return (
        <div className={'side-bar-content-container'} onMouseLeave={() => setIsSidebarOpen(false)}>
            <div className={'side-bar-inner-container'}>
                <div className={'side-bar-title'}>
                    Previous Pins
                </div>
                <div className="side-bar-line"/>
                {previousPins.map(pin => (
                    <>
                        <SidebarPin key={pin.id} pin={pin} setPinLocation={setPinLocation} setIsSidebarOpen={setIsSidebarOpen}/>
                        <div className="side-bar-line"/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default SidebarContent;
