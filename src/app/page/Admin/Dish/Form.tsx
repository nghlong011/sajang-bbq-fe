import { Col, Form, Input, Row } from 'antd';
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
        </Col>
      </Row>
    </Form>
  );
};

export default DishForm;
