import { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "../App";

const NotificationsSwitch = () => {

    const [showNotifications, setShowNotifications] = useState('');

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (tasks) {
            setShowNotifications(tasks.showNotifications);
        }
    }, [])

    const handleShowNotifications = () => {
        setShowNotifications(!showNotifications);
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        tasks.showNotifications = !showNotifications;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }

    return (
        <div>
            <label className="relative group flex justify-around items-center w-14 h-8 bg-white bg-opacity-35 shadow-sm rounded-full border border-colorSecundario border-opacity-25">
                <input
                    type="checkbox"
                    value=""
                    className="hidden"
                    onChange={handleShowNotifications}
                />
                <div className="absolute flex justify-center items-center h-6 w-6 inset-y-0 right-1 my-auto drop-shadow bg-colorAcento rounded-full ring-1 ring-colorSecundario ring-inset transition ease-in-out delay-150 group-has-[:checked]:-translate-x-full group-has-[:checked]:bg-transparent group-has-[:checked]:scale-75">
                    <svg
                        className="block w-4 aspect-square fill-black z-10 group-has-[:checked]:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                </div>
            </label>
        </div>
    );
};

export default NotificationsSwitch;
