import { Col, Row } from 'antd';

const Sale = () => {
  return (
    <div className="py-[50px]">
      <p className="text-[45px] text-primary text-center font-bold uppercase">ƯU ĐÃI</p>
      <div className="bg-image w-full h-[400px] bg-home_offer" />
      <div className="flex justify-center py-[20px]">
        <Row gutter={20} className="w-[1200px]">
          <Col span={12} className="text-center mt-10">
            <span className="text-[22px] text-primary uppercase font-bold">SAJANG BBQ</span>
            <div className="flex flex-col items-center gap-[15px] mt-5 text-base">
              <span>23 Phan Đình Phùng, Ba Đình, Hà Nội</span>
              <span>1 PHÒNG TRIỂN LÃM</span>
              <span>4 TẦNG</span>
              <span>366 KHÁCH</span>
              <span>PHÒNG VIP</span>
              <span>12 - 48 KHÁCH</span>
            </div>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12} className="bg-image w-full h-[200px] bg-sale1" />
              <Col span={12} className="bg-image w-full h-[200px] bg-sale2" />
              <Col span={12} className="bg-image w-full h-[200px] bg-sale3" />
              <Col span={12} className="bg-image w-full h-[200px] bg-sale4" />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sale;
