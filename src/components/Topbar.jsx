import GoBackButton from "./GoBackButton"


const Topbar = () => {
    return (
        <div className='flex items-center h-20 w-full bg-azul'>
            <div className="max-w-lg w-full mx-auto">
                <div className="flex justify-start p-2">
                    <GoBackButton />
                </div>
            </div>
        </div>
    )
}

export default Topbar