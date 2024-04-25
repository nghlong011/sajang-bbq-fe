import { GiftOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Input, Row } from 'antd';

const Offer = () => {
  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={24} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">ƯU ĐÃI TRONG TUẦN</p>
          <hr />
          <p className="text-base mt-5  text-center">
            <b>ƯU ĐÃI ĐI 6 TẶNG 1</b>
            <br />
            Áp dụng từ thứ 2 đến thứ 6 (không áp dụng cuối tuần và ngày lễ) <br /> Áp dụng cho nhóm từ 6 khách (áp dụng
            lũy tuyến tối đa 5 suất buffet) <br /> Chỉ áp dụng cho buffet người lớn (cao trên 1m3) <br />
            Không áp dụng đồng thời với các chương trình ưu đãi khác
          </p>
        </Col>
        <Col span={12} className="mt-5 px-5">
          <p className="text-primary font-bold text-[45px] text-center">ƯU ĐÃI ĐOÀN LỚN</p>
          <Flex>
            <hr />
            <GiftOutlined />
            <hr />
          </Flex>
          <p className="text-sm font-bold mt-5  text-justify">
            ƯU ĐÃI ĐOÀN ĐÔNG - TẶNG PHÒNG RIÊNG VÀ VOUCHER LÊN ĐẾN 2.000.000Đ
          </p>
          <ul>
            <li>
              Đoàn từ 20 khách: Sajang tặng phòng riêng trị giá 1.500.00đ và voucher trị giá 1.000.000đ trừ trực tiếp
              vào hóa
            </li>
            <li>
              Đoàn từ 40 khách: Sajang tặng phòng riêng trị giá 1.500.000đ và voucher trị giá 2.000.000đ trừ thẳng vào
              hóa đơn
            </li>
            <li>Ưu đãi áp dụng từ thứ 2 đến thứ 6 (không áp dụng cuối tuần và lễ Tết)</li>
            <li>Áp dụng cho buffet người lớn</li>
            <li>Áp dụng cho tất cả các gói buffet tại nhà hàng</li>
            <li>Chỉ áp dụng với khách thanh toán trực tiếp</li>
            <li>Không áp dụng đồng thời các chương trình khuyến mãi khác</li>
            <li>Lưu ý: Số lượng phòng riêng có hạn</li>
          </ul>
        </Col>
        <Col span={12} className=" mt-5 px-5">
          <p className="text-primary font-bold text-center text-[45px]">ƯU ĐÃI SINH NHẬT</p>

          <Flex>
            <hr />
            <TeamOutlined />
            <hr />
          </Flex>
          <p className="text-sm font-bold mt-5  text-justify">
            NHÓM TỪ 10 KHÁCH: GIẢM 10% HÓA ĐƠN + TẶNG RƯỢU SPARKLING NHẬP KHẨU <br />
            NHÓM DƯỚI 10 KHÁCH: GIẢM 10% HÓA ĐƠN + TẶNG CHỦ TIỆC 1 CHAI SOJU
          </p>
          <ul>
            <li>Áp dụng cho chủ tiệc có sinh nhật trong tháng và đặt bàn trước</li>
            <li>Áp dụng từ thứ 2 đến trưa thứ 6 hàng tuần (không áp dụng cuối tuần, lễ tết)</li>
            <li>Áp dụng cho tất cả các gói buffet và chỉ áp dụng cho buffet người lớn</li>
            <li>Ưu đãi áp dụng cho khách thanh toán trực tiếp tại nhà hàng</li>
            <li>Không áp dụng đồng thời thẻ thành viên, voucher cùng các chương trình khác</li>
          </ul>
          <p>Note: Có thể mang quà tặng về</p>
        </Col>
      </Row>
      <div className="bg-image bg-offer w-full h-[400px]">
        <Row>
          <Col span={12} className="text-center  text-white mt-5 px-5">
            <p className="text-[45px] font-bold text-center ">CHỈ CÒN</p>
            <Row>
              <Col span={6}>
                <p>
                  00 <br />
                  Days
                </p>
              </Col>
              <Col span={6}>
                <p>
                  00 <br />
                  Hours
                </p>
              </Col>
              <Col span={6}>
                <p>
                  00 <br />
                  Minutes
                </p>
              </Col>
              <Col span={6}>
                <p>
                  00 <br />
                  Seconds
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={12} className="mt-5 px-5">
            <div className="w-[635px] mx-auto text-white  font-bold">
              <p className="text-[45px] text-center">ĐĂNG KÝ NHẬN ƯU ĐÃI</p>
              <p>TÊN KHÁCH HÀNG </p>
              <Input></Input>
              <Row>
                <Col span={12}>
                  <p>SỐ ĐIỆN THOẠI</p>
                  <Input></Input>
                </Col>
                <Col span={12}>
                  <p>EMAIL</p>
                  <Input></Input>
                </Col>
              </Row>
              <p>GHI CHÚ</p>
              <Input></Input>
              <Button type="primary">XÁC NHẬN</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Offer;
