import { Chart } from "primereact/chart";

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
                grid: { display: false },
                ticks: { maxTicksLimit: 6 },
            },
            y: {
                ticks: {
                    min: 0,
                    max: 15000,
                    callback: (value) => `$${value.toLocaleString()}`,
                },
                grid: { borderDash: [2] },
            },
        },
        plugins: {
            legend: { display: false },
        },
    };

    return <Chart type="bar" data={data} options={options} />;
};

export default BarChart;
