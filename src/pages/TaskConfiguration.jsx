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

    return (
        <>
            <form action="" method="post" className='p-4'>

                <div className=" grid grid-cols-3 gap-4 border-b border-celeste pb-2">
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


            </form>

        </>
    )
}

export default TaskConfiguration