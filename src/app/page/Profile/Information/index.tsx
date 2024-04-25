import { PlusOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Button, Col, Form, Input, Row, Upload, UploadProps, message } from 'antd';
import { processPutQuery } from 'api';
import { keys } from 'lodash';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { actionUpdateUserLogin, selectUser } from 'store/authSlice';
import { confirmation, loading } from 'utils/app';
import { getBase64Single, isValisBeforeUpload } from 'utils/upload';

const UserInformation = () => {
  const user = useAppSelector(selectUser);
  const [imageUrl, setImageUrl] = useState(`${import.meta.env.VITE_API_ENPOINT}/${user?.avatar}`);
  const dispatch = useAppDispatch();

  const handleChangeAvatar: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      getBase64Single(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const handleSubmitForm = (formValues: any) => {
    const formData = new FormData();
    keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
    formData.append('role', 'CUSTOMER');

    confirmation({
      type: 'multi',
      message: 'Xác nhận thay đổi thông tin tài khoản?',
      title: 'Xác nhận',
      onSubmit: () => {
        loading.on();
        processPutQuery(`/user/${user?.id}`, formData, true).then((res) => {
          message.success('Cập nhật thông tin tài khoản thành công');
          dispatch(actionUpdateUserLogin(res.user));
          loading.off();
        });
      },
    });
  };

  return (
    <>
      <p className="font-bold text-xl mb-5">Thông tin tài khoản</p>
      <Form
        initialValues={{ remember: true }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleSubmitForm}
      >
        <Row gutter={[10, 0]}>
          <Col span={24} className="mb-[-20px]">
            <Form.Item label="" name="avatar" getValueFromEvent={(evt) => evt.file.originFileObj}>
              <Upload
                listType="picture-circle"
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  onSuccess && onSuccess('ok');
                }}
                beforeUpload={isValisBeforeUpload}
                onChange={handleChangeAvatar}
              >
                {imageUrl ? (
                  <Avatar size={100} src={imageUrl} icon={<UserOutlined />} />
                ) : (
                  <button style={{ border: 0, background: 'none' }} type="button">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Avatar</div>
                  </button>
                )}
              </Upload>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Tài khoản" name="email" initialValue={user?.email}>
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} allowClear disabled />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Mật khẩu" name="password" initialValue={'hardcode'}>
              <Input size="large" type="password" placeholder="Input your password" allowClear disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[10, 0]}>
          <Col span={6}>
            <Form.Item
              label="Họ"
              name="lastName"
              initialValue={user?.lastName}
              rules={[{ required: true, message: 'Vui lòng nhập họ của bạn!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nhập họ của bạn"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Tên"
              name="firstName"
              initialValue={user?.firstName}
              rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nhập tên của bạn"
                allowClear
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[10, 0]}>
          <Col span={6}>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              initialValue={user?.phone}
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
            >
              <Input size="large" type="phone" placeholder="Nhập số điện thoại của bạn" allowClear />
            </Form.Item>
          </Col>
        </Row>
        <Col span={24}>
          <Button type="primary" size="large" htmlType="submit" className="mt-3">
            Lưu thay đổi
          </Button>
        </Col>
      </Form>
    </>
  );
};

export default UserInformation;
