import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, message } from 'antd';
import { useAppDispatch } from 'store';
import { actionUpdateUserLogin } from 'store/authSlice';
import request from 'utils/request';

interface IProps {
  onLogin: () => void;
}

function Singup(props: Readonly<IProps>) {
  const { onLogin } = props;
  const dispatch = useAppDispatch();

  const handleSignup = (values: any) => {
    const data = { ...values, role: 'CUSTOMER' };
    request({ url: '/user', method: 'POST', data }).then((res) => {
      const { user } = res.data;
      message.success('Đăng kí tài khoản thành công');
      dispatch(actionUpdateUserLogin(user));
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-center mb-5 uppercase">Đăng ký</h1>
        <Form
          name="normal_login"
          className="w-[450px]"
          initialValues={{ remember: true }}
          onFinish={handleSignup}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            label="Tài khoản"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập Email của bạn!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nhập email của bạn"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="rePassword"
            rules={[
              {
                required: true,
                message: 'Vui lòng xác nhận lại mật khẩu của bạn!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu bạn mới nhập không khớp!'));
                },
              }),
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Nhập lại mật khẩu của bạn"
              allowClear
            />
          </Form.Item>
          <Row gutter={[10, 0]}>
            <Col span={12}>
              <Form.Item label="Họ" name="lastName" rules={[{ required: true, message: 'Vui lòng nhập họ của bạn!' }]}>
                <Input
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nhập họ của bạn"
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Tên"
                name="firstName"
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
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Nhập số điện thoại của bạn"
              allowClear
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="w-full mb-1">
              Đăng ký
            </Button>
            Hoặc{' '}
            <span className="text-link select-none cursor-pointer" onClick={onLogin}>
              đăng nhập ngay!
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Singup;
