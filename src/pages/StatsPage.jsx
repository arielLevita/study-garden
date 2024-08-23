import { useState, useEffect } from 'react';
import UsageChart from "../components/UsageChart"

const StatsPage = () => {

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
        <section className='h-full'>
            <div className='h-full w-full bg-celeste'>
                <div className='max-w-md flex flex-col justify-between h-full mx-auto p-4'>
                    <div className='flex justify-center items-center h-72 w-3/4 mx-auto'>
                        <blockquote>
                            <p className='italic text-xl my-2'>&#34;{quote.quote}&#34;</p>
                            <footer className='font-semibold text-xl text-right my-2'>- {quote.author}</footer>
                        </blockquote>
                    </div>
                    <div>
                        <button className='rounded-full shadow-xl bg-azul text-white py-1 px-4 mb-2'>Últimos 7 días</button>
                        <div className="rounded-2xl shadow-xl border border-slate-200 bg-white mb-8">
                            <UsageChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsPage