import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Col, Form, Image, Input, Row, Upload, UploadProps } from 'antd';
import { IFormProps } from 'model';
import { useMemo, useState } from 'react';
import { getBase64Single, isValisBeforeUpload } from 'utils/upload';

const BlogForm = (props: IFormProps) => {
  const { form, imageUrl, onChangeImageUrl } = props;
  const [isLoading, setIsLoading] = useState(false);
  const content = form?.getFieldValue('content');
  const ckData = useMemo(() => content, [content]);

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
  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Row gutter={[10, 0]}>
        <Col span={12}>
          <Form.Item label="Tiêu đề" name="title" rules={[{ required: true, message: `Please input blog title!` }]}>
            <Input size="large" placeholder={`Input blog title`} allowClear />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Hình ảnh" name="avatar" getValueFromEvent={(evt) => evt.file.originFileObj}>
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
        <Col span={24}>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[{ required: true, message: `Please input blog content!` }]}
          >
            <CKEditor
              editor={ClassicEditor}
              data={ckData}
              onChange={(event, editor) => {
                form?.setFieldsValue({ content: editor.data.get() });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default BlogForm;
