import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
const data: ChartData<'bar'> = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  datasets: [
    {
      label: 'Doanh thu tuần này',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Doanh thu tuần trước',
      backgroundColor: 'rgb(90,106,207)',
      borderColor: 'white',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(90,106,207)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [55, 49, 90, 60, 40, 75, 20],
    },
  ],
};
const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart = () => {
  return (
    <div className="h-[330px]">
      <h2>Doanh thu</h2>
      <p>900.000.000 VN</p>
      <Bar data={data} options={options} width={100} height={50} />
    </div>
  );
};

export default BarChart;
