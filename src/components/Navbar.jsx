import { Link } from "react-router-dom"

const Navbar = () => {

    const linkStyles = {
        width: 24,
        height: 24,
        fill: '#f3f4f6'
    }

    const navbarLinks = [
        {
            name: 'Nueva',
            to: '/newtask/taskconfiguration',
            icon: <svg style={linkStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        },
        {
            name: 'Guardado',
            to: '/savedtasks',
            icon: <svg style={linkStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>
        },
        {
            name: '',
            to: '/home',
            icon: ''
        },
        {
            name: 'Tareas',
            to: '/taskslist',
            // to: '/underconstruction',
            icon: <svg style={linkStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z" /></svg>
        },
        {
            name: 'Estadísticas',
            to: '/statspage',
            icon: <svg style={linkStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
        }
    ]

    return (
        <div className="h-[72px] bg-azul">
            <div className="relative max-w-md mx-auto">
                <ul className="flex p-4">
                    {
                        navbarLinks.map((link) => (
                            <li className="w-1/5" key={link.name}>
                                <Link to={link.to}>
                                    <div className="flex justify-center">{link.icon}</div>
                                    <div className="text-center text-xs text-gray-100">{link.name}</div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="absolute inset-x-0 -top-4 m-auto w-[15%] aspect-square">
                    <Link to="/" className="block bg-naranja w-full h-full rounded-full">
                        <button className="flex flex-col justify-center items-center w-full h-full rounded-full ring-claro ring-4">
                            <div className="w-1 h-1/6 bg-naranja"></div>
                            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
                                <svg className="absolute inset-x-1 -bottom-1 h-4/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#f28705"><path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" /></svg>
                            </div>
                            <div className="w-1 h-1/6 bg-black"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar