import { Col, Row, Image } from 'antd';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import dish1 from 'assets/images/menu/soju-chum-churum-truyen-thong.jpeg';
import dish2 from 'assets/images/gallery/Untitled-design-11.png';
import dish3 from 'assets/images/gallery/Untitled-design-13.png';
import dish4 from 'assets/images/gallery/Untitled-design-15.png';
import dish5 from 'assets/images/gallery/Untitled-design-17.png';
import LineChart from './LineChart';
interface IDish {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

const listDish: IDish[] = [
  { id: 1, imageUrl: dish1, name: 'rượu soju', price: '300.000VNĐ' },
  { id: 2, imageUrl: dish2, name: 'bò nướng', price: '400.000VNĐ' },
  { id: 3, imageUrl: dish3, name: 'bò lúc lắc', price: '500.000VNĐ' },
  { id: 4, imageUrl: dish4, name: 'bò nướng tảng', price: '300.000VNĐ' },
  { id: 5, imageUrl: dish5, name: 'bò nướng lá lốt', price: '600.000VNĐ' },
];
function Dashboard() {
  return (
    <div className="w-full h-[500px]">
      <p>Dashboard</p>
      <Row className="w-full" gutter={[6, 6]}>
        <Col span={14} className="mb-8">
          <BarChart />
        </Col>
        <Col span={10}>
          <div className="w-[300px] mx-auto">
            <DonutChart />
          </div>
        </Col>
        <Col span={14}>
          <LineChart />
        </Col>
        <Col span={10}>
          <div className="w-[400px] mx-auto">
            <h2>Món ăn được đặt nhiều nhất</h2>
            <Row className="w-full" gutter={[6, 6]}>
              {listDish.map((img: IDish, index: number) => (
                <Col key={img.id} span={24} className="w-full ">
                  <Row>
                    <Col span={4}>
                      <Image height="100%" width="100%" src={img.imageUrl} className="object-cover" />
                    </Col>
                    <Col span={10}>
                      <p>{img.name}</p>
                    </Col>
                    <Col span={10}>
                      <p>{img.price}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
