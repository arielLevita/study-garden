/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import HomeMenuButton from "./HomeMenuButton"
import GoBackButton from "./GoBackButton"

const Topbar = ({ isInstalled, handleInstall }) => {

    const [currentPath, setCurrentPath] = useState('')
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/newtask/taskconfiguration':
                setCurrentPath('Nueva tarea');
                break;
            case '/newtask/taskdescription':
                setCurrentPath('Descripción');
                break;
            case '/newtask/audioselector':
                setCurrentPath('Audio');
                break;
            case '/savedtasks':
                setCurrentPath('Guardado');
                break;
            case '/taskslist':
                setCurrentPath('Lista de tareas');
                break;
            case '/statspage':
                setCurrentPath('Estadísticas');
                break;
            case '/about':
                setCurrentPath('Acerca de');
                break;
            case '/contact':
                setCurrentPath('Contacto');
                break;
            case '/underconstruction':
                setCurrentPath('En construcción');
                break;
            case '/':
            default:
                setCurrentPath('Inicio');
                break;
        }
    }, [location])

    return (
        <div className='flex items-center h-20 w-full bg-colorSecundario'>
            <div className="flex items-center justify-between max-w-lg w-full mx-auto pr-2">
                <div className="flex justify-start items-center p-2">
                    {
                        location.pathname == '/'
                            ? <HomeMenuButton />
                            : <GoBackButton />
                    }
                    <div>
                        <button type='button' className="text-white text-2xl mx-4">{currentPath}</button>
                    </div>
                </div>
                <div className="h-10">
                    {
                        !isInstalled && 
                        <motion.button 
                            onClick={handleInstall} 
                            className='h-full w-full max-w-32 text-sm text-center text-colorPrincipal italic border border-colorPrincipal border-opacity-50 bg-colorSecundario rounded-xl shadow-[1px_2px_2px_rgba(240,240,240,0.3)] px-4 py-1'
                            whileTap={{ scale: 0.99, translateX: 2, translateY: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Instalar App
                        </motion.button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Topbar