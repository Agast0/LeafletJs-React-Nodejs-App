import './index.css';
import { FaRegBookmark } from "react-icons/fa";
import { useState } from "react";
import Drawer from '@mui/joy/Drawer';
import SidebarContent from "./SidebarContent/SidebarContent";

function Sidebar({setPinLocation}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSidebarOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {!isSidebarOpen && <div className={'side-bar-container'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={'side-bar-icon'}>
                    <FaRegBookmark size={18}/>
                    <div className={'side-bar-saved-text'}>
                        saved
                    </div>
                </div>
            </div>}
            <Drawer open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} anchor={'right'}>
                <SidebarContent setIsSidebarOpen={setIsSidebarOpen} setPinLocation={setPinLocation}/>
            </Drawer>
        </>
    );
}

export default Sidebar;
