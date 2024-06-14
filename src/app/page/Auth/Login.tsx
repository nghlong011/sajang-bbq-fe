import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from 'store';
import { IPayloadLogin, actionLogin } from 'store/authSlice';

interface IProps {
  onSignup: () => void;
}

function Login(props: Readonly<IProps>) {
  const { onSignup } = props;
  const dispatch = useAppDispatch();

  const handleLogin = (values: IPayloadLogin) => {
    dispatch(actionLogin(values));
  };

  return (
    <div>
      <h1 className="text-center mb-5 uppercase">Đăng nhập</h1>
      <Form
        name="normal_login"
        className="w-[400px]"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
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
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' }]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập mật khẩu của bạn"
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" className="w-full mb-1">
            Đăng nhập
          </Button>
          Hoặc{' '}
          <span className="text-link select-none cursor-pointer" onClick={onSignup}>
            Đăng ký ngay!
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
