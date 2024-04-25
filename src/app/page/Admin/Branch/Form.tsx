import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Checkbox, Col, Form, Image, Input, Row, Upload, UploadProps } from 'antd';
import { processGetQuery } from 'api';
import { IFormProps } from 'model';
import { useEffect, useState } from 'react';
import { getBase64Single, isValisBeforeUpload } from 'utils/upload';

const BranchForm = (props: IFormProps) => {
  const { form, imageUrl, onChangeImageUrl } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [utils, setUtils] = useState<any[]>([]);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Image</div>
    </button>
  );

  const handleChangeAvatar: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setIsLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64Single(info.file.originFileObj, (url) => {
        setIsLoading(false);
        onChangeImageUrl(url);
      });
    }
  };

  useEffect(() => {
    processGetQuery('/utility').then((data) => {
      setUtils(data.utils);
    });
  }, []);

  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Row gutter={[10, 0]}>
        <Col span={12}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: `Please input branch's name!` }]}>
            <Input size="large" placeholder={`Input branch's name`} allowClear />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Table" name="table" rules={[{ required: true, message: `Please input branch's table!` }]}>
            <Input type="number" size="large" placeholder={`Table`} allowClear />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: `Please input branch's phone!` }]}
          >
            <Input size="large" placeholder={`Input branch's phone`} allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: `Please input branch's address!` }]}
          >
            <Input size="large" placeholder={`Input branch's address`} allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Utilities" name="utils">
            <Checkbox.Group>
              <Row>
                {utils.map((util) => (
                  <Col key={util.id} span={8}>
                    <Checkbox value={util.id}>{util.name}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Image" name="avatar" getValueFromEvent={(evt) => evt.file.originFileObj}>
            <Upload
              listType="picture-card"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => {
                onSuccess && onSuccess('ok');
              }}
              beforeUpload={isValisBeforeUpload}
              onChange={handleChangeAvatar}
            >
              {uploadButton}
            </Upload>
          </Form.Item>
        </Col>
        {imageUrl && (
          <Col span={9} className="mt-3">
            <Image src={imageUrl} height={150} width={250} />
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default BranchForm;
