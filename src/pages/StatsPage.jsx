import { useState, useEffect } from 'react';
import UsageChart from "../components/UsageChart"
import AnimatedPage from '../components/AnimatedPage';

const StatsPage = () => {

    const [showDailyStats, setShowDailyStats] = useState(true);

    const quotes = [
        {
            quote: 'El secreto del éxito no es hacer lo que te gusta, sino que te guste lo que haces.',
            author: 'Winston Churchill'
        },
        {
            quote: 'La productividad nunca es un accidente. Siempre es el resultado de un compromiso con la excelencia, la planificación inteligente y el esfuerzo enfocado.',
            author: 'Paul J. Meyer'
        },
        {
            quote: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
            author: 'Robert Collier'
        },
        {
            quote: 'La productividad se refiere tanto a la acción como al resultado de un proceso que se centra en evaluar las prioridades y luego actuar en función de ellas.',
            author: 'Melissa Steginus'
        },
        {
            quote: 'La disciplina es el puente entre las metas y los logros.',
            author: 'Jim Rohn'
        },
        {
            quote: 'El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.',
            author: 'Winston Churchill'
        },
        {
            quote: 'La mejor manera de predecir el futuro es crearlo.',
            author: 'Peter Drucker'
        },
        {
            quote: 'La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas.',
            author: 'Jim Ryun'
        },
        {
            quote: 'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.',
            author: 'Vidal Sassoon'
        },
        {
            quote: 'Empieza donde estás, usa lo que tienes, haz lo que puedas.',
            author: 'Arthur Ashe'
        },
    ]

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const [quote, setQuote] = useState(getRandomQuote);

    useEffect(() => {
        setQuote(getRandomQuote());
    }, []);

    return (
        <section className='h-full bg-celeste'>
            <AnimatedPage>
                <div className='h-full w-full'>
                    <div className='max-w-md flex flex-col justify-between h-full mx-auto p-4'>
                        <div className='flex justify-center items-center h-72 w-full mx-auto'>
                            <div className='w-full h-fit border-2 border-naranja border-dashed rounded-2xl p-4'>
                                <blockquote className=''>
                                    <p className='italic text-xl my-2'>&#34;{quote.quote}&#34;</p>
                                    <footer className='font-semibold text-xl text-right my-2'>- {quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div>
                            <label className="relative group flex justify-around items-center w-1/2 h-8 bg-white bg-opacity-35 shadow-sm rounded-full border border-azul border-opacity-25 mb-2">
                                <input type="checkbox" value="" className="hidden" onChange={() => setShowDailyStats(!showDailyStats)} />
                                <div className='absolute flex items-center h-full w-1/2 top-0 left-0 drop-shadow-[1px_2px_2px_rgba(0,0,0,0.3)] bg-naranja rounded-full transition ease-in-out delay-150 group-has-[:checked]:translate-x-full *:w-full *:text-center *:text-black *:animate-fadeIn'>
                                    <div className='group-has-[:checked]:hidden'>7 días</div>
                                    <div className='hidden group-has-[:checked]:block'>Semanal</div>
                                </div>
                                <span>7 días</span>
                                <span>Semanal</span>
                            </label>
                            <div className="rounded-2xl shadow-xl border border-slate-200 bg-white mb-8">
                                <UsageChart showDailyStats={showDailyStats} />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default StatsPage