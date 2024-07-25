import { processGetQuery } from 'api';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Col, Row } from 'antd';

dayjs.extend(isBetween);

interface Booking {
  id: number;
  date: string;
  // Các trường khác của Booking
}

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    datasets: [
      {
        label: 'Tuần trước',
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Tuần này',
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: 'rgb(90,106,207)',
        tension: 0.1,
      },
    ],
  });

  const [totalBookings, setTotalBookings] = useState(0);
  const [thisWeekBookings, setThisWeekBookings] = useState(0);
  const [lastWeekBookings, setLastWeekBookings] = useState(0);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    processGetQuery('/booking?current=1&size=999').then((data) => {
      const bookings: Booking[] = data.booking;
      const thisWeekCounts = [0, 0, 0, 0, 0, 0, 0];
      const lastWeekCounts = [0, 0, 0, 0, 0, 0, 0];

      let totalBookingsCount = 0;
      let thisWeekBookingsCount = 0;
      let lastWeekBookingsCount = 0;

      const startOfWeek = dayjs().startOf('week').add(1, 'day'); // Bắt đầu từ thứ 2
      const startOfLastWeek = startOfWeek.subtract(1, 'week');

      bookings.forEach((booking) => {
        const bookingDate = dayjs(booking.date, 'DD/MM/YYYY');
        totalBookingsCount++;

        if (bookingDate.isBetween(startOfWeek, startOfWeek.add(6, 'day'), null, '[]')) {
          const dayOfWeek = (bookingDate.day() + 6) % 7; // Điều chỉnh để thứ 2 là ngày đầu tiên
          thisWeekCounts[dayOfWeek]++;
          thisWeekBookingsCount++;
        } else if (bookingDate.isBetween(startOfLastWeek, startOfLastWeek.add(6, 'day'), null, '[]')) {
          const dayOfWeek = (bookingDate.day() + 6) % 7; // Điều chỉnh để thứ 2 là ngày đầu tiên
          lastWeekCounts[dayOfWeek]++;
          lastWeekBookingsCount++;
        }
      });

      setChartData({
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
        datasets: [
          {
            label: 'Tuần trước',
            data: lastWeekCounts,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
          {
            label: 'Tuần này',
            data: thisWeekCounts,
            fill: false,
            borderColor: 'rgb(90,106,207)',
            tension: 0.1,
          },
        ],
      });

      setTotalBookings(totalBookingsCount);
      setThisWeekBookings(thisWeekBookingsCount);
      setLastWeekBookings(lastWeekBookingsCount);
    });
  }, []);

  return (
    <div className="h-[350px]">
      <h2>Số lượng đơn đặt bàn</h2>
      <Row>
        <Col span={8}>
          <p>Tổng số đơn đặt bàn: {totalBookings}</p>
        </Col>
        <Col span={8}>
          <p>Đơn đặt bàn tuần này: {thisWeekBookings}</p>
        </Col>
        <Col span={8}>
          <p>Đơn đặt bàn tuần trước: {lastWeekBookings}</p>
        </Col>
      </Row>
      <Line data={chartData} options={options} width={350} />
    </div>
  );
};

export default LineChart;
