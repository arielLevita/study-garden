import { Link } from "react-router-dom";
import NotificationsSwitch from "./NotificationsSwitch";
import ResetAppButton from "./ResetAppButton";

const HomeMenu = () => {
    return (
        <nav className="fixed top-20 left-0 bottom-12 w-2/3 bg-celeste border-r-2 border-r-naranja border-r-dotted border-opacity-30 pt-4 pb-8 -translate-x-full will-change-transform">
            <ul className="flex flex-col list-none gap-4 p-4">
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none border-b border-white pb-8 mb-4">
                    <h2 className="text-azul text-center text-3xl font-semibold mb-2">Study Garden</h2>
                    <div>
                        <img src="./imagen-icono.png" alt="" className="w-16 h-16 mx-auto" />
                    </div>
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <NotificationsSwitch />
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <Link to={'/about'} className="w-full text-lg text-left text-azul font-medium">
                        Acerca de
                    </Link>
                </li>
                <li className="block w-full origin-right will-change-[transform,opacity,filter] list-none">
                    <ResetAppButton />
                </li>
            </ul>
        </nav>
    )
}

export default HomeMenu;