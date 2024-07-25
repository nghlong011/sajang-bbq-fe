import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import dayjs from 'dayjs';

interface Booking {
  id: number;
  date: string;
  schedule: {
    time: string;
  };
}

interface DonutChartProps {
  bookingData: Booking[];
}

const DonutChart = ({ bookingData }: DonutChartProps) => {
  const [chartData, setChartData] = useState({
    labels: ['Trưa', 'Chiều', 'Tối'],
    datasets: [
      {
        label: 'Đơn đặt bàn',
        data: [0, 0, 0],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  useEffect(() => {
    let trua = 0;
    let chieu = 0;
    let toi = 0;

    bookingData.forEach((booking) => {
      const bookingTime = dayjs(booking.schedule.time, 'HH:mm');
      if (bookingTime.isBetween(dayjs('10:00', 'HH:mm'), dayjs('12:00', 'HH:mm'), null, '[)')) {
        trua++;
      } else if (bookingTime.isBetween(dayjs('13:00', 'HH:mm'), dayjs('17:00', 'HH:mm'), null, '[)')) {
        chieu++;
      } else {
        toi++;
      }
    });

    setChartData({
      labels: ['Trưa', 'Chiều', 'Tối'],
      datasets: [
        {
          label: 'Đơn đặt bàn',
          data: [trua, chieu, toi],
          backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1,
        },
      ],
    });
  }, [bookingData]);

  return (
    <div className="text-center">
      <h2>Số lượng đơn đặt bàn theo buổi</h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
