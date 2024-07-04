import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';

const PlantAnimations = () => {

    const plants = [
        {
            plant: plant01,
            speed: 0.25
        },
        {
            plant: plant02,
            speed: 0.25
        }
    ]

    return (
        <div>
            <div>
                {
                    plants?.map((plant) => (
                        <Lottie
                            key={plant.plant}
                            animationData={plant.plant}
                            loop={true}
                            speed={plant.speed}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PlantAnimations