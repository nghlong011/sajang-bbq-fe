import { Col, Row } from 'antd';

const Address = () => {
  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="w-full h-[350px] bg-add1 bg-image" />
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">ĐỊA ĐIỂM</p>
          <p className="text-base mt-5  text-justify">
            Toạ lạc trên con đường đẹp nhất Hà Nội với 3 hàng cây rợp bóng 4 mùa, Sajang BBQ hiện hữu với vẻ sang trọng
            vị thế là nhà hàng lẩu nướng Hàn Quốc lớn nhất Việt Nam. Lối kiến trúc nổi bật với sự kết hợp hài hoà phong
            thái hiện đại và nét kiến trúc Hàn Quốc đầy tinh tế. Đặc biệt, bên cạnh ẩm thực độc đáo, thực khách sẽ được
            trải nghiệm không gian nghệ thuật đặc sắc tại phòng triển lãm tranh tại tầng 1 của nhà hàng.
          </p>
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">SẢNH CHỜ</p>
          <p className="text-base mt-5  text-justify">
            Đến với nhà hàng Sajang BBQ, thực khách sẽ bước vào chuyến lãng du giữa 2 miền văn hoá Việt Nam – Hàn Quốc,
            giữa nghệ thuật và ẩm thực. Không gian tầng 1 của nhà hàng dành riêng làm khu vực check-in cho khách và
            trưng bày BST tranh sơn mài “Hà Nội 12 mùa hoa” của hoạ sỹ Nguyễn Trọng Toàn.
          </p>
        </Col>
        <Col span={12} className="w-full h-[350px] bg-add2 bg-image" />
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="w-full h-[350px] bg-add3 bg-image" />
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">TẦNG HẦM</p>
          <p className="text-base mt-5  text-justify">48 chỗ ngồi</p>
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">TẦNG 2</p>
          <p className="text-base mt-5  text-justify">114 chỗ ngồi</p>
        </Col>
        <Col span={12} className="w-full h-[350px] bg-add4 bg-image" />
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="w-full h-[350px] bg-add5 bg-image" />
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">TẦNG 3</p>
          <p className="text-base mt-5  text-justify">72 chỗ ngồi</p>
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">TẦNG 5,6</p>
          <p className="text-base mt-5  text-justify">Phòng VIP 12 chỗ ngồi Phòng riêng 18 – 24 – 42 chỗ ngồi</p>
        </Col>
        <Col span={12} className="w-full h-[350px] bg-add6 bg-image" />
      </Row>
    </div>
  );
};

export default Address;
