import React, {Component} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'title',
        },
    },
    scales: {
        y: {
            ticks: {
                stepSize: 1,
                display: false
            },
            grid: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

class DataViewer extends Component {
    render() {
        const note_info = this.props.note_info
        const labels = note_info.map(i => i.name)
        const scores = note_info.map(i => i.score)

        const data = {
            labels,
            datasets: [
                {
                    label: 'Scores',
                    data: scores,
                    backgroundColor: '#2587ea',
                },
            ],
        };

        return (
            <div className="fullwidth">
                <div className="chartcontainer">
                    <Bar data={data} options={options} />
                </div>
            </div>
        );
    }
}

export default DataViewer;