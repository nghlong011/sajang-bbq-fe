import { Button, Col, Form, Image, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={18} className="w-full">
          <div className="text-center font-bold text-3xl">{data.title}</div>
          <Image src={`${import.meta.env.VITE_API_ENPOINT}/${data.imageUrl}`} className="h-[300px]" preview={false} />
          <p
            className="text-[#777777] text-sm mt-3 line-clamp-4 mb-10"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <Form initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <Row gutter={[10, 0]}>
              <Col span={24}>
                <div>
                  <p className="font-bold">TRẢ LỜI</p>
                  <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                </div>
                <Form.Item name="">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="name">
                  <Input size="large" type="name" placeholder="Name" allowClear />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="email">
                  <Input size="large" type="email" placeholder="Email" allowClear />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="website">
                  <Input size="large" type="website" placeholder="Website" allowClear />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item name="website">
                  <Button>Phản hồi</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={6} className="mt-5 px-5">
          <div>
            <p className="uppercase font-bold mb-5">chuyên mục</p>
            <ul className="list-none p-0">
              <li>Blog(8)</li>
              <hr />
              <li>Uncategorized (2)</li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-bold mb-5">BÀI VIẾT MỚI</p>
            <div className="p-0 flex flex-col space-y-4">
              <p>FESTIVAL FREEFLOW – REFILL ĐỒ UỐNG KHÔNG GIỚI HẠN CHỈ TỪ 89K</p>
              <p>CHƯƠNG TRÌNH 20.10 – “NÀNG”Cơ Hội Săn Vé Born Pink & pghtStick</p>
              <p>Đu Idol Black Pink Ngay Tại Sajang BBQ</p>
              <p>TUẦN LỄ VALENTINE: TẶNG SOCOLA VÀ SOJU CHO NHÓM ĐỘC THÂN</p>
              <p>THỊT HEO IBERICO – MÓN MỜI QUÝ TỘC TỪ TÂY BAN NHA</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetails;
