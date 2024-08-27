const HomeMenu = () => {
    return (
        <nav className="fixed top-16 left-0 bottom-12 w-1/2 bg-azul pt-8 -translate-x-full will-change-transform">
            <ul className="flex flex-col list-none gap-2 p-4">
                <li className="block bg-naranja origin-right font-bold p-2 will-change-[transform,opacity,filter] list-none">
                    <button>
                        Reiniciar aplicación
                    </button>
                </li>
                <li className="block bg-naranja origin-right font-bold p-2 will-change-[transform,opacity,filter] list-none">About</li>
                <li className="block bg-naranja origin-right font-bold p-2 will-change-[transform,opacity,filter] list-none">Contact</li>
                <li className="block bg-naranja origin-right font-bold p-2 will-change-[transform,opacity,filter] list-none">Search</li>
            </ul>
        </nav>
    )
}

export default HomeMenu;