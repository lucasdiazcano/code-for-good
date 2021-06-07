import React from 'react'
import DirectorAccount from './DirectorAccount'
import { Bar } from 'react-chartjs-2'

const Metrics = () => {

    const data = {
        labels: ['Santiago', 'Añatuya', 'Monte Quemado'],
        datasets: [
            {
                label: 'Ausentes por region',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className='take-to-the-top' style={{ width: '100%' }}>
            <DirectorAccount />
            <h2 className='text-center'>Ausentes por región</h2>

            <Bar data={data} options={options} />


        </div>
    )
}

export default Metrics
