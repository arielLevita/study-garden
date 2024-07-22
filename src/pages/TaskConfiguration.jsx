import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';


const TaskConfiguration = () => {

    const plants = [
        {
            plant: plant01,
            speed: 0.25
        },
        {
            plant: plant02,
            speed: 0.25
        },
        {
            plant: plant06,
            speed: 1
        },
        {
            plant: plant04,
            speed: 0.25
        },
        {
            plant: plant07,
            speed: 0.25
        },
        {
            plant: plant09,
            speed: 1
        }
    ]

    const nombresDeTareas = ['Estudio', 'Limpieza', 'Trabajo']

    return (
        <>
            <div className='h-full w-full bg-celeste'>
                <form action="" method="post" className='p-4'>
                    <div className='rounded-3xl shadow-lg bg-white *:border-b *:border-celeste'>
                        <div className="last:border-none p-4">
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Planta a dar vida</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    plants?.map((plant) => (
                                        <>
                                            <label
                                                className='relative max-h-24 aspect-square rounded-full bg-celeste has-[:checked]:bg-naranja p-2 mx-auto'
                                                key={plant.plant}
                                            >
                                                <Lottie
                                                    className='h-full mx-auto'
                                                    animationData={plant.plant}
                                                    loop={true}
                                                    speed={plant.speed}
                                                />
                                                <input
                                                    type="radio"
                                                    name='plantAnimation'
                                                    className='
                                            absolute 
                                            top-2
                                            right-0
                                            [appearance:none]
                                            checked:before:block
                                            checked:before:[content:""]
                                            checked:before:w-6 
                                            checked:before:aspect-square
                                            checked:before:bg-azul
                                            checked:before:bg-[url("check_white.svg")]
                                            checked:before:rounded-full
                                            checked:before:bg-no-repeat
                                            checked:before:bg-center'
                                                />
                                            </label>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='last:border-none p-4'>
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Tarea a realizar</h3>
                            <div className='flex justify-around gap-3 mb-2'>
                                {
                                    nombresDeTareas?.map((nombre) => (
                                        <>
                                            <label
                                                className='group flex justify-center items-center w-1/3 bg-azul has-[:checked]:bg-naranja rounded-full p-2'
                                            >
                                                <div className='hidden group-has-[:checked]:block  bg-azul rounded-full mr-2'>
                                                    <svg className='w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </div>
                                                <div className='text-white group-has-[:checked]:text-azul'>{nombre}</div>
                                                <input type="radio" name='nombreDeTarea' className='hidden' />
                                            </label>
                                        </>
                                    ))
                                }
                            </div>
                            <a href="" className='block w-1/2 mx-auto'>
                                <button type="button" className='flex items-center justify-center gap-2 w-full bg-celeste rounded-full shadow-md p-3'>
                                    <svg className='w-4 fill-azul' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                    <span className='text-azul font-semibold uppercase'>nueva tarea</span>
                                </button>
                            </a>
                        </div>
                    </div>

                </form>

            </div>
        </>
    )
}

export default TaskConfiguration