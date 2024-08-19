import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import HomeMenuButton from "./HomeMenuButton"
import GoBackButton from "./GoBackButton"

const Topbar = () => {

    const [currentPath, setCurrentPath] = useState('')
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/newtask/taskconfiguration':
                setCurrentPath('Diseño');
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
        <div className='flex items-center h-20 w-full bg-azul'>
            <div className="max-w-lg w-full mx-auto">
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
            </div>
        </div>
    )
}

export default Topbar