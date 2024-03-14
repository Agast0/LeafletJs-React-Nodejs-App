import './index.css';
import React from "react";
import SidebarPin from "../SidebarPin/SidebarPin";
import { PinApiContext } from "../../Providers/PinApiProvider";
import SidebarDownloadButton from "../SidebarDownloadButton/SidebarDownloadButton";
import {Skeleton} from '@mui/joy';
function SidebarContent({ setIsSidebarOpen, setPinLocation }) {
    const { previousPins, isLoading } = React.useContext(PinApiContext);

    return (
        <div className={'side-bar-content-container'} onMouseLeave={() => setIsSidebarOpen(false)}>
            <div className={'side-bar-inner-container'}>
                <div className={'side-bar-title'}>
                    Previous Pins
                </div>
                <div className="side-bar-line" />
                { isLoading ?
                    <>
                        <div className={"side-bar-skeleton-container"}>
                            <Skeleton sx={{width: '78%', height: '40px'}}/>
                            <div className="side-bar-line" style={{marginTop: '100px'}}/>
                        </div>
                        <div className={"side-bar-skeleton-container second"}>
                            <Skeleton sx={{width: '78%', height: '40px'}}/>
                            <div className="side-bar-line" style={{marginTop: '100px'}}/>
                        </div>
                        <div className={"side-bar-skeleton-container second"}>
                            <Skeleton sx={{width: '78%', height: '40px'}}/>
                            <div className="side-bar-line" style={{marginTop: '100px'}}/>
                        </div>
                    </>

                    :
                    <div className="side-bar-pins-container">
                        {previousPins.map(pin => (
                            <div key={pin.id}>
                                <SidebarPin pin={pin} setPinLocation={setPinLocation} setIsSidebarOpen={setIsSidebarOpen}/>
                            <div className="side-bar-line"/>
                        </div>
                    ))}
                </div>}
                <SidebarDownloadButton />
            </div>
        </div>
    );
}

export default SidebarContent;
