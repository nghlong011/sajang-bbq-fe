import { Col, Image, Row } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { useEffect, useState } from 'react';
import gallery1 from 'assets/images/gallery/T1_1_1-scaled.jpg';
import gallery2 from 'assets/images/gallery/T2_1-scaled.jpg';
import gallery3 from 'assets/images/gallery/T2_2-scaled.jpg';
import gallery4 from 'assets/images/gallery/T3_1-scaled.jpg';
import gallery5 from 'assets/images/gallery/T3_2-scaled.jpg';
import gallery6 from 'assets/images/gallery/T3_3-scaled.jpg';
import gallery7 from 'assets/images/gallery/T5_2-scaled.jpg';
import gallery8 from 'assets/images/gallery/T5_4-scaled.jpg';
import gallery9 from 'assets/images/gallery/T5_6-scaled.jpg';
import gallery10 from 'assets/images/gallery/TB_1-scaled.jpg';
import gallery11 from 'assets/images/gallery/TB_3-scaled.jpg';
import gallery12 from 'assets/images/gallery/Sajang-BBQ-Gallery-Private-dinner-3.jpg';
import gallery13 from 'assets/images/gallery/Untitled-design-11.png';
import gallery14 from 'assets/images/gallery/Untitled-design-13.png';
import gallery15 from 'assets/images/gallery/Untitled-design-15.png';
import gallery16 from 'assets/images/gallery/Untitled-design-16.png';
import gallery17 from 'assets/images/gallery/Untitled-design-17.png';
import gallery18 from 'assets/images/gallery/Untitled-design-18.png';
import gallery19 from 'assets/images/gallery/Untitled-design-2.png';
import gallery20 from 'assets/images/gallery/Untitled-design-5.png';
import gallery21 from 'assets/images/gallery/Untitled-design-7.png';
import gallery22 from 'assets/images/gallery/Untitled-design-9.png';
import gallery23 from 'assets/images/gallery/Untitled-design.png';
import gallery24 from 'assets/images/gallery/Sajang-BBQ-web-Gallery-1.jpg';
import gallery25 from 'assets/images/gallery/mika.jpeg';
import gallery26 from 'assets/images/gallery/minhanh.jpeg';
import gallery27 from 'assets/images/gallery/Nguyen-Ngoc-Minh-Anh.jpeg';
import gallery28 from 'assets/images/gallery/Phan-May.jpeg';
import gallery29 from 'assets/images/gallery/thuyanh.jpeg';
import gallery30 from 'assets/images/gallery/bichlien.jpeg';
import gallery31 from 'assets/images/gallery/z2423332100143_6dcf2dac3514ac0ab41816b53d524c7c.jpg';
import gallery32 from 'assets/images/gallery/z2423332130183_7109366c9e2d13eff313eaf84c587865.jpg';
import gallery33 from 'assets/images/gallery/z2423332157412_b8ef335f5988becd30b03497d6a02de5.jpg';
import gallery34 from 'assets/images/gallery/z2423332165736_69951dbfad630f3372ce6c691f42f697.jpg';
import gallery35 from 'assets/images/gallery/z2423332177604_a6e2d0db0c3d21f5962d6fb4ee3c13f3.jpg';
import gallery36 from 'assets/images/gallery/z2423332191007_fa022c31b69cf9db98b4ae4520e3624d.jpg';

interface IImage {
  id: number;
  imageUrl: string;
}

const listImageSpace: IImage[] = [
  { id: 1, imageUrl: gallery1 },
  { id: 2, imageUrl: gallery2 },
  { id: 3, imageUrl: gallery3 },
  { id: 4, imageUrl: gallery4 },
  { id: 5, imageUrl: gallery5 },
  { id: 6, imageUrl: gallery6 },
  { id: 7, imageUrl: gallery7 },
  { id: 8, imageUrl: gallery8 },
  { id: 9, imageUrl: gallery9 },
  { id: 10, imageUrl: gallery10 },
  { id: 11, imageUrl: gallery11 },
  { id: 12, imageUrl: gallery12 },
];
const listImageDish: IImage[] = [
  { id: 1, imageUrl: gallery13 },
  { id: 2, imageUrl: gallery14 },
  { id: 3, imageUrl: gallery15 },
  { id: 4, imageUrl: gallery16 },
  { id: 5, imageUrl: gallery17 },
  { id: 6, imageUrl: gallery18 },
  { id: 7, imageUrl: gallery19 },
  { id: 8, imageUrl: gallery20 },
  { id: 9, imageUrl: gallery21 },
  { id: 10, imageUrl: gallery22 },
  { id: 11, imageUrl: gallery23 },
  { id: 12, imageUrl: gallery24 },
];
const listImageCustomer: IImage[] = [
  { id: 1, imageUrl: gallery25 },
  { id: 2, imageUrl: gallery26 },
  { id: 3, imageUrl: gallery27 },
  { id: 4, imageUrl: gallery28 },
  { id: 5, imageUrl: gallery29 },
  { id: 6, imageUrl: gallery30 },
  { id: 7, imageUrl: gallery31 },
  { id: 8, imageUrl: gallery32 },
  { id: 9, imageUrl: gallery33 },
  { id: 10, imageUrl: gallery34 },
  { id: 11, imageUrl: gallery35 },
  { id: 12, imageUrl: gallery36 },
];
const Gallery = () => {
  const [data, setData] = useState<DynamicKeyObject[]>([]);

  useEffect(() => {
    processGetQuery('/gallery', { current: 1, size: 8 }).then((res) => {
      setData(res.galleries);
    });
  }, []);

  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={14} className="w-full h-[500px]">
          <Row className="w-full" gutter={[6, 6]}>
            {listImageSpace.map((img: IImage, index: number) => (
              <Col key={img.id} span={6} className="w-full h-[130px] ">
                <Image height="100%" width="100%" src={img.imageUrl} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">KHÔNG GIAN 5 SAO</p>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">ẨM THỰC THƯỢNG HẠNG</p>
        </Col>
        <Col span={14} className="w-full h-[500px]">
          <Row className="w-full" gutter={[6, 6]}>
            {listImageDish.map((img: IImage, index: number) => (
              <Col key={img.id} span={6} className="w-full h-[130px] ">
                <Image height="100%" width="100%" src={img.imageUrl} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={14} className="w-full h-[500px]">
          <Row className="w-full" gutter={[6, 6]}>
            {listImageCustomer.map((img: IImage, index: number) => (
              <Col key={img.id} span={6} className="w-full h-[130px] ">
                <Image height="100%" width="100%" src={img.imageUrl} className="object-cover" />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">THỰC KHÁCH</p>
        </Col>
      </Row>
      <Row className="!mx-auto py-[50px]">
        {data.map((item: DynamicKeyObject) => (
          <Col key={item.id} span={6} className="w-full h-[300px] image-list">
            <Image src={`${import.meta.env.VITE_API_ENPOINT}/${item.url}`} width="100%" height={300} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
