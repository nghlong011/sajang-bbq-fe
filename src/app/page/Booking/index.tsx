import { InfoCircleFilled } from '@ant-design/icons';
import { Button, Col, Image, Row, Tooltip } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { useEffect, useState } from 'react';
import BookingForm from './Form';

const Booking = () => {
  const [branches, setBranches] = useState<any[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<DynamicKeyObject>({});
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    processGetQuery('/branch').then((data) => {
      setBranches(data.branch);
      setSelectedBranch(data.branch[0]);
    });
  }, []);

  return (
    <div>
      <Row className="max-w-[1250px] !mx-auto py-[50px]" gutter={[12, 12]}>
        <Col span={10}>
          <div style={{ overflowY: 'scroll', height: '500px' }}>
            <ul className="list-none my-0">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="pt-2 first:pt-0 cursor-pointer"
                  onClick={() => setSelectedBranch(branch)}
                >
                  <li>
                    <Row className="mb-3">
                      <p className="font-bold text-xl mr-2">{branch.name}</p>
                      <Tooltip
                        color="white"
                        overlayClassName="custom-tooltip"
                        className="cursor-pointer"
                        title={
                          <div className="w-full flex justify-center items-center text-black">
                            <div className="pr-5">
                              <p className="text-center text-[25px] font-bold my-[15px]">Tiện ích</p>
                              <ul>
                                {branch.utils?.map((item: DynamicKeyObject) => (
                                  <li key={item.UtilityId}>
                                    <p>{item.util?.name}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        }
                        placement="right"
                        trigger={['hover']}
                        overlayStyle={{
                          maxWidth: 'none',
                        }}
                      >
                        <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                      </Tooltip>
                    </Row>
                    <p className="text-base mb-2">{branch.address}</p>
                    <Row className="space-x-5">
                      <Button className="h-12 w-[45%] text-[17px]">{branch.phone}</Button>
                      <Button
                        className="h-12 w-[45%] text-[17px]"
                        type="primary"
                        onClick={() => {
                          setIsOpenModal(true);
                          setSelectedBranch(branch.id);
                        }}
                      >
                        Đặt bàn
                      </Button>
                    </Row>
                  </li>
                  <hr className="mt-5" />
                </div>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={14} className="w-full">
          <Image height="100%" width="100%" src={`${import.meta.env.VITE_API_ENPOINT}/${selectedBranch?.avatar}`} />
        </Col>
      </Row>
      {isOpenModal && (
        <BookingForm isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} branch={selectedBranch} />
      )}
    </div>
  );
};

export default Booking;
