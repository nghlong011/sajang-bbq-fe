import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import { Avatar, Button, Flex } from 'antd';
import { URL } from 'constants/url';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { actionLogout, selectUser } from 'store/authSlice';

const menus = [
  {
    text: 'Trang chủ',
    url: URL.home,
  },
  {
    text: 'Địa điểm',
    url: URL.address,
  },
  {
    text: 'Thực đơn',
    url: URL.menu,
  },
  {
    text: 'Ưu đãi',
    url: URL.offer,
  },
  {
    text: 'Bài đăng',
    url: URL.blog,
  },
  {
    text: 'Thư viện',
    url: URL.gallery,
  },
  {
    text: 'Liên hệ',
    url: URL.contact,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  const handleAction = (action: 'login' | 'logout') => {
    action === 'logout' && dispatch(actionLogout());
    navigate(URL.login);
  };

  return (
    <div className="w-full fixed top-0 z-[99] ">
      <div className="w-full bg-red h-[30px] shadow-lg">
        <Flex className="max-w-[1425px] h-[100%] px-[90px] mx-auto" align="center">
          <div className="text-white">
            <EnvironmentFilled />
            23 Phan Đình Phùng, Ba Đình, Hà Nội
          </div>
          <div className="text-white ml-3">
            <PhoneFilled />
            0886 399 099
          </div>
        </Flex>
      </div>
      <div className="w-full bg-white h-[70px] shadow-lg">
        <Flex className="max-w-[1425px] h-[100%] px-[90px] mx-auto" justify="space-between" align="center">
          <Link
            to={URL.home}
            className="bg-logo bg-cover bg bg-center w-[100px] h-[50px]"
            onClick={() => scrollTo(0, 0)}
          />
          <div>
            {menus.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="font-bold uppercase cursor-pointer p-[20px] hover:text-primary text-[#3c2311] text-xs"
              >
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
          {!user?.id ? (
            <Button onClick={() => handleAction('login')}>Đăng nhập</Button>
          ) : (
            <div>
              <Link to={URL.profile.information}>
                <Avatar src={`${import.meta.env.VITE_API_ENPOINT}/${user.avatar}`} size={40} className="mr-2" />
              </Link>
              <Button onClick={() => handleAction('logout')}>Đăng xuất</Button>
            </div>
          )}
        </Flex>
      </div>
    </div>
  );
};

export default Header;
