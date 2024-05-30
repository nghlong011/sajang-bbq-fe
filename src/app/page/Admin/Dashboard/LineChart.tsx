import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  datasets: [
    {
      label: 'Tuần trước',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Tuần này',
      data: [90, 30, 60, 100, 50, 30, 150],
      fill: false,
      borderColor: 'rgb(90,106,207)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  return (
    <div className="h-[350px]">
      <h2>Số lượng đơn đặt bàn</h2>
      <Line data={data} options={options} width={350} />
    </div>
  );
};

export default LineChart;
