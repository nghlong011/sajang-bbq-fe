import { Button, Col, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactPage = () => {
  return (
    <Row>
      <Col span={24} className="mt-5 px-5">
        <div className="w-[635px] mx-auto grid gap-4">
          <p className="text-[45px] text-center ">Ý KIẾN ĐÓNG GÓP</p>
          <p className="">
            Sajang BBQ luôn mong muốn nhận được nhiều ý kiến, nhận xét của khách hàng để có thể cải thiện và cung cấp
            chất lượng dịch vụ, sản phẩm tốt nhất.
          </p>
          <p>TÊN KHÁCH HÀNG </p>
          <Input></Input>
          <p>SỐ ĐIỆN THOẠI</p>
          <Input></Input>
          <p>EMAIL</p>
          <Input></Input>
          <p>GHI CHÚ</p>
          <TextArea rows={4}></TextArea>
          <Button type="primary">XÁC NHẬN</Button>
        </div>
      </Col>
    </Row>
  );
};

export default ContactPage;
