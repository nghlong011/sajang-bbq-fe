import { Col, Image, Row } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import { URL } from 'constants/url';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <div>
      <div className="mt-[50px]">
        <Row gutter={10} className="max-w-[1500px] !mx-auto">
          {data.blogs?.map((item: DynamicKeyObject) => (
            <Col key={item.id} span={12} className="px-3" onClick={() => navigate(URL.blogdetails, { state: item })}>
              <div className="h-full border-b-solid border-b-[1px] border-b-[#dddddd] pb-2 cursor-pointer">
                <Row>
                  <Col span={8} className="image-list">
                    <Image
                      src={`${import.meta.env.VITE_API_ENPOINT}/${item.imageUrl}`}
                      className="!h-[205px]"
                      preview={false}
                    />
                  </Col>
                  <Col span={16} className="pl-3">
                    <p className="uppercase text-[#3d2d22] text-lg mt-5">{item.title}</p>
                    <p
                      className="text-[#777777] text-sm mt-3 line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <p className="text-primary text-xs font-bold mt-5">Xem thêm</p>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <AppPagination onChangeDataTable={setData} apiPath="/blog" align="center" />
        </Row>
      </div>
    </div>
  );
};

export default Blog;
