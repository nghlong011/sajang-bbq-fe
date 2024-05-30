import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Sáng', 'Trưa', 'Chiều', 'Tối'],
  datasets: [
    {
      label: 'Đơn đặt bàn',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Từ 1-6/6/2024',
    },
  },
};

const DonutChart = () => {
  return (
    <div className="text-center">
      <h2>Số lượng đơn đặt bàn theo buổi</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
