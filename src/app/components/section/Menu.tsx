import { Carousel, Col, Flex, Row } from 'antd';
import ButtonCustom from '../custom/ButtonCustom';

const Menu = () => {
  return (
    <Flex justify="center">
      <Row gutter={20} className="w-[1200px]">
        <Col span={24} className="text-center mb-5 px-[50px]">
          <span className="text-[40px] text-primary font-bold uppercase">Menu</span>
        </Col>
        <Col span={12}>
          <Carousel className="styled-carousel" autoplay={true} dots={true} slidesToShow={1}>
            <div className="bg-image bg-menu1 w-full h-[400px]" />
            <div className="bg-image bg-menu3 w-full h-[400px]" />
          </Carousel>
          <ButtonCustom className="uppercase font-bold mx-auto mt-[45px]" text="Xem thêm" />
        </Col>
        <Col span={12}>
          <Carousel className="styled-carousel" autoplay={true} dots={true} slidesToShow={1}>
            <div className="bg-image bg-menu4 w-full h-[400px]" />
            <div className="bg-image bg-menu2 w-full h-[400px]" />
          </Carousel>
          <ButtonCustom className="uppercase font-bold mx-auto mt-[45px]" text="Xem thêm" />
        </Col>
      </Row>
    </Flex>
  );
};

export default Menu;
