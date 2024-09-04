import { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "../App";

const NotificationsSwitch = () => {

    const [showNotifications, setShowNotifications] = useState('');

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (tasks) {
            setShowNotifications(tasks.showNotifications);
        }
    },[])

    const handleShowNotifications = () => {
        setShowNotifications(!showNotifications);
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        tasks.showNotifications = !showNotifications;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }

    return (
        <div className="flex justify-between items-center">
            <span className="w-full text-left text-azul font-medium">Notificaciones</span>
            <label className="relative group flex justify-around items-center w-12 h-6 bg-white bg-opacity-35 shadow-sm rounded-full border border-azul border-opacity-25">
                <input
                    type="checkbox"
                    value=""
                    className="hidden"
                    onChange={handleShowNotifications}
                />
                <div className="absolute flex items-center h-4 w-4 inset-y-0 left-1 my-auto drop-shadow bg-naranja rounded-full ring-1 ring-azul ring-inset transition ease-in-out delay-150 group-has-[:checked]:translate-x-full group-has-[:checked]:bg-transparent"></div>
            </label>
        </div>
    );
};

export default NotificationsSwitch;
