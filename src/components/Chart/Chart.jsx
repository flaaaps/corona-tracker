import React from 'react';

import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['#9b59b6', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        hoverBackgroundColor: ['#9c59b6e7', 'rgba(0, 255, 0, 0.4)', 'rgba(255, 0, 0, 0.4)'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country === '' ? 'the world' : country}` },
            }}
        />
    ) : null;

    return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
