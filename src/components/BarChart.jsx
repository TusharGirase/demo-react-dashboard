import React from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const BarChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Revenue",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [4215, 5312, 6251, 7841, 9821, 14984],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    maxTicksLimit: 6,
                },
            },
            y: {
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5,
                    callback: function (value) {
                        return `$${value.toLocaleString()}`;
                    },
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2],
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Revenue: $${tooltipItem.raw.toLocaleString()}`;
                    },
                },
            },
        },
    };

    return (
        <div className="col-xl-12 col-md-12 mb-4">
            <Card className="shadow">
                <Card.Header className="py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                </Card.Header>
                <Card.Body>
                    <div className="chart-bar" style={{ height: "300px" }}>
                        <Bar data={data} options={options} />
                    </div>
                    <hr />
                    Styling for the bar chart follows Bootstrap guidelines.
                </Card.Body>
            </Card>
        </div>
    );
};

export default BarChart;
