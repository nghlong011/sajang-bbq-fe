import { Col, Form, Input, Row, Select } from 'antd';
import { IFormProps } from 'model';

const DishForm = (props: IFormProps) => {
  const { form } = props;

  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Row gutter={[10, 0]}>
        <Col span={24}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: `Please input dish name!` }]}>
            <Input size="large" placeholder={`Input dish name`} allowClear />
          </Form.Item>
          <Form.Item label="Giá" name="price" rules={[{ required: true, message: `Please input dish name!` }]}>
            <Input size="large" placeholder={`Nhập giá món ăn`} allowClear type="number" />
          </Form.Item>
          <Form.Item label="Vai trò" name="role" rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}>
            <Select>
              <Select.Option value="1">Món chính</Select.Option>
              <Select.Option value="2">Món phụ</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DishForm;
