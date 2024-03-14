import './index.css';
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function SidebarPin({ pin, setPinLocation, setIsSidebarOpen}) {
    const [isPinHovered, setIsPinHovered] = useState(false);
    const [isIconHovered, setIsIconHovered] = useState(false);

    const dateTime = new Date(pin.datetime);
    const formattedDateTime = `${dateTime.toLocaleDateString()}`;

    const handlePinMouseEnter = () => {
        setIsPinHovered(true);
    };

    const handlePinMouseLeave = () => {
        setIsPinHovered(false);
    };

    const handleIconMouseEnter = () => {
        setIsIconHovered(true);
    };

    const handleIconMouseLeave = () => {
        setIsIconHovered(false);
    };

    const handlePinClicked = () => {
        setPinLocation(parseFloat(pin.lat), parseFloat(pin.lng));
        setIsSidebarOpen(false);
    }

    const handleDeletePinClicked = () => {
        // to do
    }

    return (
        <div className={`pin-container ${isPinHovered ? 'pin-hovered' : ''}`}
             onMouseEnter={handlePinMouseEnter}
             onMouseLeave={handlePinMouseLeave}
             onClick={handlePinClicked}
        >
            <div className={'pin-text-container'}>
                <div className={'pin-text-coordinates'}>
                    {pin.lat}, {pin.lng}
                </div>
                <div className={'pin-text-date'}>
                    {formattedDateTime}
                </div>
            </div>
            <div className={`pin-icon-container`}
                 onMouseEnter={handleIconMouseEnter}
                 onMouseLeave={handleIconMouseLeave}
                 onClick={handleDeletePinClicked}
            >
                <IoIosClose size={30} style={{ color: isIconHovered ? 'var(--red)' : '', cursor: 'pointer' }} />
            </div>
        </div>
    );
}

export default SidebarPin;
