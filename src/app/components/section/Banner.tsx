import { Button, Flex } from 'antd';
import { getPageName } from 'utils/app';
import 'styles/banner.scss';
import { useNavigate } from 'react-router-dom';
import { URL } from 'constants/url';

const Banner = () => {
  const pageName = getPageName();
  const navigate = useNavigate();

  return (
    <Flex className={`${pageName} bg-banner bg-image h-[850px] uppercase`} align="flex-end">
      <div className="max-w-[1425px] mx-auto mb-[200px]">
        <p className="text-white font-bold text-[65px] bg-[#00000036] px-[20px] w-fit rounded-xl">
          Buffet trưa xèo xèo thịt nướng
        </p>
        <Button
          type="primary"
          className="mt-[10px] uppercase w-[190px] h-[60px] text-[22px] font-bold"
          onClick={() => navigate(URL.booking)}
        >
          Đặt bàn
        </Button>
      </div>
    </Flex>
  );
};

export default Banner;
