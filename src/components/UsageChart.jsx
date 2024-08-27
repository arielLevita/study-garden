import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { LOCAL_STORAGE_KEY } from '../App';

const UsageChart = () => {

    const [chartArray, setChartArray] = useState([])

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const records = tasks.records;

        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return { date: date.toISOString().split('T')[0], minutes: 0 };
        }).reverse();

        const chartData = last7Days.map(day => {
            const record = records.find(r => r.date === day.date);
            return record ? record : day;
        });

        setChartArray(chartData)
    }, [])

    function tickFormatter(inputDate) {
        var date = new Date(inputDate);
        const month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        if (!isNaN(date.getTime())) {
            return date.getDate() + ' ' + month[date.getMonth() + 1];
        }
    }

    return (
        <div>
            <div className='w-full h-72 p-2'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={300}
                        height={200}
                        data={chartArray}
                        barSize={'10%'}
                        margin={{ top: 12 }}
                    >
                        <Bar
                            dataKey="minutes"
                            className='fill-celeste drop-shadow-[1px_2px_2px_rgba(0,0,0,0.2)]'
                            label={{ fill: '#1a3551', fontWeight: 600, fontSize: '12px', position: 'top' }}
                        />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={8}
                            tickFormatter={tickFormatter}
                            className='text-xs'
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UsageChart