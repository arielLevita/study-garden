/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { LOCAL_STORAGE_KEY } from '../App';

const UsageChart = ({ showDailyStats }) => {

    const [sevenDaysChartArray, setSevenDaysChartArray] = useState([]);
    const [weeklyChartArray, setWeeklyChartArray] = useState([]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const records = tasks.records;

        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return { date: date.toISOString().split('T')[0], minutes: 0 };
        }).reverse();

        const sevenDaysChartData = last7Days.map(day => {
            const record = records.find(r => r.date === day.date);
            return record ? record : day;
        });

        setSevenDaysChartArray(sevenDaysChartData)


        const weeklyData = Array.from({ length: 4 }, (_, i) => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - (i + 1) * 7 + 1); // Start of the week
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 6); // End of the week

            const weekLabel = i === 0 ? 'Esta semana' : i === 1 ? 'Semana pasada' : `${i + 1} semanas`;
            const weekMinutes = records.reduce((total, record) => {
                const recordDate = new Date(record.date);
                return recordDate >= startDate && recordDate <= endDate ? total + record.minutes : total;
            }, 0);

            return { week: weekLabel, minutes: weekMinutes };
        }).reverse();

        setWeeklyChartArray(weeklyData);
    }, [])

    function dailyTickFormatter(inputDate) {
        var date = new Date(inputDate);
        const month = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        if (!isNaN(date.getTime())) {
            return date.getDate() + ' ' + month[date.getMonth() + 1];
        }
    }

    function weeklyTickFormatter(weekLabel) {
        return weekLabel
    }

    return (
        <div>
            {
                showDailyStats
                    ? <div className='w-full h-72 p-2'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={300}
                                height={200}
                                data={sevenDaysChartArray}
                                barSize={'10%'}
                                margin={{ top: 16 }}
                            >
                                <Bar
                                    dataKey="minutes"
                                    className='fill-colorPrincipal drop-shadow-[1px_2px_2px_rgba(0,0,0,0.2)]'
                                    label={{ fill: '#1a3551', fontWeight: 600, fontSize: '12px', position: 'top' }}
                                />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={8}
                                    tickFormatter={dailyTickFormatter}
                                    className='text-xs'
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    : <div className='w-full h-72 p-2'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={300}
                                height={200}
                                data={weeklyChartArray}
                                barSize={'15%'}
                                margin={{ top: 16 }}
                            >
                                <Bar
                                    dataKey="minutes"
                                    className='fill-colorPrincipal drop-shadow-[1px_2px_2px_rgba(0,0,0,0.2)]'
                                    label={{ fill: '#1a3551', fontWeight: 600, fontSize: '12px', position: 'top' }}
                                />
                                <XAxis
                                    dataKey="week"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={8}
                                    tickSize={6}
                                    tickFormatter={weeklyTickFormatter}
                                    className='text-xs'
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
            }
        </div>
    )
}

export default UsageChart