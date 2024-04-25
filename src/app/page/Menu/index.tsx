import { Button, Col, Image, Row } from 'antd';
import listMenu1 from 'assets/images/menu/listmenu1.png';
import listMenu10 from 'assets/images/menu/listmenu10.png';
import listMenu11 from 'assets/images/menu/listmenu11.png';
import listMenu12 from 'assets/images/menu/listmenu12.png';
import listMenu13 from 'assets/images/menu/listmenu13.png';
import listMenu14 from 'assets/images/menu/listmenu14.png';
import listMenu15 from 'assets/images/menu/listmenu15.png';
import listMenu16 from 'assets/images/menu/listmenu16.png';
import listMenu17 from 'assets/images/menu/listmenu17.png';
import listMenu18 from 'assets/images/menu/listmenu18.png';
import listMenu2 from 'assets/images/menu/listmenu2.png';
import listMenu3 from 'assets/images/menu/listmenu3.png';
import listMenu4 from 'assets/images/menu/listmenu4.png';
import listMenu5 from 'assets/images/menu/listmenu5.png';
import listMenu6 from 'assets/images/menu/listmenu6.png';
import listMenu7 from 'assets/images/menu/listmenu7.png';
import listMenu8 from 'assets/images/menu/listmenu8.png';
import listMenu9 from 'assets/images/menu/listmenu9.png';
import drink1 from 'assets/images/menu/logo-bia-tiger-crystal_091106427.jpeg';
import drink2 from 'assets/images/menu/lotte-chum-churum-peach-soju-360ml.png';
import drink4 from 'assets/images/menu/products_img.jpeg';
import drink3 from 'assets/images/menu/soju-chum-churum-truyen-thong.jpeg';

const Menu = () => {
  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={24} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">BUFFET</p>
          <p className="text-base mt-5  text-center">
            Các loại thịt tại Sajang BBQ đều là thịt bò Angus đạt tiêu chuẩn USDA Choice (đạt chất lượng cao cấp theo
            tiêu chuẩn của bộ nông nghiệp Hoa Kỳ), với tỉ lệ của phần thịt nạc và vân mỡ được chọn lọc kỹ lưỡng.
            <br /> Điểm nổi bật của thịt tại Sajang BBQ là thịt không tẩm ướp, nhằm đem đến cho thực khách cảm nhận rõ
            chất lượng mùi vị tự nhiên và độ ngọt, tươi ngon của thịt. <br />
            Bên cạnh đó, thực đơn sushi và sashimi cho các thực khách các sự lựa cho mới lạ và đa dạng hơn. Ăn kèm là
            các loại Panchan và món nóng độc đáo và hấp dẫn.
          </p>
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu1} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu2} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu3} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu4} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu5} preview={false} />
        </Col>
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu6} preview={false} />
        </Col>
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu7} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu8} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu9} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu10} preview={false} />
        </Col>
        <Col span={6} className="w-full mt-5 px-4">
          <Image src={listMenu11} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={12} className="w-full mt-5 px-4">
          <Image src={listMenu12} preview={false} />
        </Col>
        <Col span={12} className="w-full mt-5 px-4">
          <Image src={listMenu13} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu14} preview={false} />
        </Col>
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu15} preview={false} />
        </Col>
        <Col span={8} className="w-full mt-5 px-4">
          <Image src={listMenu16} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[10px]">
        <Col span={12} className="w-full mt-5 px-4">
          <Image src={listMenu17} preview={false} />
        </Col>
        <Col span={12} className="w-full mt-5 px-4">
          <Image src={listMenu18} preview={false} />
        </Col>
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">SPECIAL COMBO</p>
          <p className="text-base mt-5  text-justify">
            Thực đơn thượng hạng dành cho nhóm khách VIP. Phù hợp cho những nhóm từ 6 người trở lên với những món ăn
            nguyên liệu đặc sắc như thịt bò Wagyu, Tôm hùm và Cua hoàng đế nướng than củi ăn cùng nấm Đông Cô, Linh
            Chi,….
          </p>
        </Col>
        <Col span={12} className="w-full h-[350px] bg-add6 bg-image" />
      </Row>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={12} className="w-full h-[600px]">
          <Row className="w-full" gutter={[12, 12]}>
            <Col span={12} className="w-full h-[250px] overflow-hidden ">
              <Image width={300} src={drink1} />
            </Col>
            <Col span={12} className="w-full h-[250px] overflow-hidden">
              <Image width={300} src={drink2} />
            </Col>
            <Col span={12} className="w-full h-[250px] overflow-hidden">
              <Image width={300} src={drink3} />
            </Col>
            <Col span={12} className="w-full  h-[250px] overflow-hidden">
              <Image width={300} src={drink4} />
            </Col>
          </Row>
        </Col>
        <Col span={12} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">ĐỒ UỐNG</p>
          <p className="text-base mt-5 text-justify">
            Menu đồ uống phong phú được thiết kế phù hợp với các món ăn Hàn Quốc.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
