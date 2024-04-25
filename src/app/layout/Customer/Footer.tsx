import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, TikTokOutlined } from '@ant-design/icons';
import { Col, Input, Row, Space } from 'antd';
import ButtonCustom from 'app/components/custom/ButtonCustom';

const icons = [
  {
    id: 1,
    icon: FacebookOutlined,
  },
  {
    id: 2,
    icon: InstagramOutlined,
  },
  {
    id: 3,
    icon: YoutubeOutlined,
  },
  {
    id: 4,
    icon: TikTokOutlined,
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#332B25] text-white">
        <Row className="max-w-[1300px] mx-auto py-[50px]">
          <Col span={12}>
            <div className="text-center">
              <span className="text-xl uppercase">Theo dõi chúng tôi trên</span>
              <div className="mt-[15px] flex justify-center gap-[7px]">
                {icons.map((item) => {
                  const Icon = item.icon;
                  return <Icon key={item.id} className="text-5xl hover:text-primary hover:cursor-pointer" />;
                })}
              </div>
            </div>
            <div className="text-[#cccccc] text-base mt-[30px]">
              <p className="font-bold">CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ NGON VIỆT NAM</p>
              <p>
                <span className="font-bold">Mã số thuế:</span> 0106822419
              </p>
            </div>
          </Col>
          <Col span={12}>
            <p className="text-xl uppercase">NHẬN THÔNG TIN ƯU ĐÃI</p>
            <div className="text-[#cccccc] text-base">
              <div className="mt-3 mb-1">
                <label className="font-bold" htmlFor="email">
                  Email <span className="text-error">*</span>
                </label>
              </div>
              <Space.Compact className="w-[70%]">
                <Input id="email" />
                <ButtonCustom type="primary" text="Submit" />
              </Space.Compact>
            </div>
            <p className="text-xl uppercase mt-7">GIỜ MỞ CỬA</p>
            <div className="text-[#cccccc] text-base mt-2">
              <p>Thứ 2 - Chủ Nhật</p>
              <p>11:00 - 14:00 & 17:00 - 22:00</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-[#281E16] text-white text-sm py-[20px] px-[100px]">
        <p>© 2020 sajangbbq.com. Design by Digital</p>
      </div>
    </div>
  );
};

export default Footer;
