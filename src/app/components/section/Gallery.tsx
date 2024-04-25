import { Col, Image, Row } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState<DynamicKeyObject[]>([]);

  useEffect(() => {
    processGetQuery('/gallery', { current: 1, size: 24 }).then((res) => {
      setImages(res.galleries);
    });
  }, []);

  return (
    <div className="text-center">
      <span className="text-[45px] text-primary font-bold uppercase">Thư viện</span>
      <Row gutter={[10, 10]} className="!mx-[5px]">
        {images.map((image) => (
          <Col key={image.id} span={6} className="image-list">
            <Image src={`${import.meta.env.VITE_API_ENPOINT}/${image.url}`} className="!h-full" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
