import { Link } from "react-router-dom";
import NotificationsSwitch from "./NotificationsSwitch";
import ResetAppButton from "./ResetAppButton";

const HomeMenu = () => {
    return (
        <nav className="fixed flex flex-col justify-between top-20 left-0 bottom-12 w-2/3 bg-colorPrincipal border-r-2 border-r-colorAcento border-r-dotted border-opacity-30 pt-4 pb-12 py-4 -translate-x-full will-change-transform">
            <ul className="flex flex-col h-full list-none gap-5 *:px-4">
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none border-b border-white pb-8 mb-4">
                    <h2 className="text-colorSecundario text-center text-3xl font-semibold mb-2">Study Garden</h2>
                    <div>
                        <img src="./imagen-icono.png" alt="" className="w-16 h-16 mx-auto" />
                    </div>
                </li>
                <li className="flex justify-between items-center w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <span className="w-full text-xl text-left text-colorSecundario font-medium">Notificaciones</span>
                    <NotificationsSwitch />
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <Link to={'/about'} className="w-full text-xl text-left text-colorSecundario font-medium">
                        Acerca de
                    </Link>
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <Link to={'/contact'} className="w-full text-xl text-left text-colorSecundario font-medium">
                        Contacto
                    </Link>
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none border-t border-white p-4 mt-auto">
                    <ResetAppButton />
                </li>
            </ul>
        </nav>
    )
}

export default HomeMenu;