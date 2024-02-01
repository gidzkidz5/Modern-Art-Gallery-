import { useState, useEffect } from 'react';

const useScreenWidth = () => {
    const [deviceType, setDeviceType] = useState('desktop');

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setDeviceType('mobile');
        } else if (width >= 768 && width < 1024) {
            setDeviceType('tablet');
        } else if (width >= 1024 && width <= 1440){
            setDeviceType('desktop');
        } else {
            setDeviceType('desktopWide')
        }
    };

    useEffect(() => {
        handleResize(); // Set the initial device type
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
};

export default useScreenWidth;
