import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant05 from '../assets/AnimatedPlants/plant05-animation.json';
import plant08 from '../assets/AnimatedPlants/plant08-animation.json';


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
            plant: plant07,
            speed: 1
        },
        {
            plant: plant04,
            speed: 0.25
        },
        {
            plant: plant05,
            speed: 0.25
        },
        {
            plant: plant08,
            speed: 1
        }
    ]

    return (
        <>
            <div className=" grid grid-cols-3 gap-4">
                {
                    plants?.map((plant) => (
                        <Lottie
                            key={plant.plant}
                            className='max-h-24 border border-black'
                            animationData={plant.plant}
                            loop={true}
                            speed={plant.speed}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default TaskConfiguration