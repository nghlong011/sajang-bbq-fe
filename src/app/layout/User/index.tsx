import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme, Image } from 'antd';
import { URL } from 'constants/url';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { actionLogout, selectUser } from 'store/authSlice';

const { Header, Sider, Content } = Layout;

interface IProps {
  children: JSX.Element;
}

const menu = [
  {
    key: 'infomation',
    label: <Link to={URL.profile.information}>Thông tin cá nhân</Link>,
  },
  {
    key: 'bookinghistory',
    label: <Link to={URL.profile.bookinghistory}>Lịch sử đặt bàn</Link>,
  },
];

const UserLayout = (props: IProps) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCollapse, setIsCollapse] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const user = useAppSelector(selectUser);

  return (
    <>
      {user?.role === 'ADMIN' ? (
        <Navigate to={URL.admin.dashboard} />
      ) : (
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={isCollapse}
            theme="light"
            className="border-0 border-r-[1px] border-solid border-r-[#eeeeee]"
          >
            <div className="p-[5px]">
              <Link to={URL.home}>
                <Image src="https://www.tlu.edu.vn/Portals/0/2014/Logo-WRU.png" preview={false} />
              </Link>
            </div>
            <Menu mode="inline" defaultSelectedKeys={['infomation']} items={menu} />
          </Sider>
          <Layout>
            <Header
              className="flex justify-between items-center pr-5 pl-0"
              style={{
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setIsCollapse(!isCollapse)}
                style={{
                  width: 64,
                  height: 64,
                }}
                size="large"
              />
              <div className="flex items-center gap-3">
                <p className="font-bold text-base">Hello, {user.firstName}</p>
                <Avatar
                  className="cursor-pointer mr-2"
                  size={40}
                  src={`${import.meta.env.VITE_API_ENPOINT}/${user.avatar}`}
                />
                <LogoutOutlined
                  title="Logout"
                  className="text-xl font-extrabold cursor-pointer hover:text-info"
                  onClick={() => {
                    dispatch(actionLogout());
                    navigate(URL.home);
                  }}
                />
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                height: 'calc(100vh - 48px - 64px)',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                overflow: 'auto',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default UserLayout;
