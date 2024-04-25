import { Avatar, Col, Modal, Row } from 'antd';
import { BOOKING_STATUS } from 'constants/app';
import { DynamicKeyObject } from 'model';

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleSubmitForm: () => void;
  row: DynamicKeyObject;
}

function DetailBooking(props: Readonly<IProps>) {
  const { isOpen, row, handleCloseModal, handleSubmitForm } = props;
  console.log('row', row);

  return (
    <Modal
      title={<p className="text-2xl">Thông tin đơn đặt bàn</p>}
      centered
      open={isOpen}
      width={600}
      onOk={handleSubmitForm}
      onCancel={handleCloseModal}
      maskClosable={false}
    >
      <div className="mt-2">
        <p className="mb-2 font-bold text-base">Thông tin khách hàng</p>
        <div className="flex gap-3 items-center text-base">
          <Avatar size={100} src={`${import.meta.env.VITE_API_ENPOINT}/${row.customer?.avatar}`} />
          <div className="ml-3">
            <p>Họ tên:</p>
            <p>Email:</p>
            <p>Số điện thoại:</p>
          </div>
          <div>
            <p>
              {row.customer?.firstName} {row.customer?.lastName}
            </p>
            <p>{row.customer?.email}</p>
            <p>{row.customer?.phone}</p>
          </div>
        </div>
        <p className="mt-2 mb-1 font-bold text-base">Thông tin lịch đặt</p>
        <Row>
          <Col span={12}>
            Thời gian: {row.schedule?.time} - {row.date}
          </Col>
          <Col span={12}>Số bàn: {row.table}</Col>
          <Col span={12}>Chi nhánh: {row.branch?.name}</Col>
          <Col span={12}>Trạng thái: {BOOKING_STATUS[row.status]}</Col>
        </Row>
        <p>
          Món ăn đặt kèm:{' '}
          {row.dishes.length ? row.dishes?.map((dish: DynamicKeyObject) => dish.dish?.name).join(', ') : 'Không'}
        </p>
      </div>
    </Modal>
  );
}

export default DetailBooking;
