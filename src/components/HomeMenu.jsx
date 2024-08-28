import ResetAppButton from "./ResetAppButton";

const HomeMenu = () => {
    return (
        <nav className="fixed top-16 left-0 bottom-12 w-1/2 bg-azul py-8 -translate-x-full will-change-transform">
            <ul className="flex flex-col list-none gap-2 p-4">
                <li className="block w-full bg-azul origin-right will-change-[transform,opacity,filter] list-none">
                    <ResetAppButton />
                </li>
            </ul>
        </nav>
    )
}

export default HomeMenu;