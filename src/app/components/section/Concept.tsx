import { Col, Row } from 'antd';

const Concept = () => {
  return (
    <Row className="max-w-[1200px] !mx-auto py-[50px]">
      <Col span={12} className="text-center mt-5 px-5">
        <p className="text-primary font-bold text-[45px]">Concept ẩm thực</p>
        <p className="text-base mt-5">
          Hương vị chuẩn Hàn - Nhật được đầu bếp dày công nghiên cứu để xây dựng những thực đơn độc đáo nhất. Thịt bò
          được chứng nhận USDA Choice - đảm bảo tươi ngon và không hề tẩm ướp, giữ trọn sự đậm đà tự nhiên trong từng
          thớ thịt. Sushi & Sashimi được đích thân bếp trưởng chọn lựa kỹ càng, tươi mới hàng ngày và đa dạng. Thực đơn
          của Sajang BBQ sẽ mang đến trải nghiệm tuyệt hảo đến quý khách hàng.
        </p>
      </Col>
      <Col span={12} className="w-full h-[350px] bg-home-concept bg-image" />
    </Row>
  );
};

export default Concept;
