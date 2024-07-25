import { Button, Col, Input, Row, message } from 'antd';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleConfirmClick = () => {
    message.success('Gửi thành công');
    setName('');
    setPhone('');
    setEmail('');
    setNote('');
  };

  return (
    <Row>
      <Col span={24} className="mt-5 px-5">
        <div className="w-[635px] mx-auto grid gap-4">
          <p className="text-[45px] text-center ">Ý KIẾN ĐÓNG GÓP</p>
          <p className="">
            Sajang BBQ luôn mong muốn nhận được nhiều ý kiến, nhận xét của khách hàng để có thể cải thiện và cung cấp
            chất lượng dịch vụ, sản phẩm tốt nhất.
          </p>
          <p>TÊN KHÁCH HÀNG</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <p>SỐ ĐIỆN THOẠI</p>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          <p>EMAIL</p>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>GHI CHÚ</p>
          <TextArea rows={4} value={note} onChange={(e) => setNote(e.target.value)} />
          <Button type="primary" onClick={handleConfirmClick}>
            XÁC NHẬN
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ContactPage;
