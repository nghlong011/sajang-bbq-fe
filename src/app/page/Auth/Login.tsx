import { ArrowRightOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Image, Input, Row } from 'antd';
import { useAppDispatch } from 'store';
import { IPayloadLogin, actionLogin } from 'store/authSlice';
import image from '../../../assets/images/img-01.png';
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
    <div className="wrap-login100 px-[40px] pt-[100px]">
      <Row>
        <Col span={12}>
          <div className="login100-pic js-tilt" data-tilt>
            <Image src={image} preview={false}></Image>
          </div>
        </Col>
        <Col span={12}>
          <h1 className="text-center mb-12 uppercase">ĐĂNG NHẬP</h1>
          <Form
            name="normal_login"
            className="w-[290px] my-0 mx-auto"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập Email của bạn!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                allowClear
                className="rounded-full"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' }]}>
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                allowClear
                className="rounded-full"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" className="w-full mb-1 login-button">
                Đăng nhập
              </Button>
              <div className="select-none cursor-pointer pt-[136px] text-center text-black" onClick={onSignup}>
                Tạo tài khoản <ArrowRightOutlined />
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
