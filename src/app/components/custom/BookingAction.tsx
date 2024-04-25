import { Button, Space, message } from 'antd';
import { processDeleteQuery, processPutQuery } from 'api';
import { DynamicKeyObject, ENUM_BOOKING_STATUS } from 'model';
import { confirmation, reloadPaginatedData } from 'utils/app';

interface IProps {
  row: DynamicKeyObject;
  apiPath: string;
}

function BookingAction(props: Readonly<IProps>) {
  const { row, apiPath } = props;

  const handleUpdateRow = (nextStatus: string, confirmationTitle: string, successMessage: string) => {
    confirmation({
      type: 'multi',
      title: 'Xác nhận',
      message: confirmationTitle,
      onSubmit: () => {
        processPutQuery(`${apiPath}/${row.id}`, { status: nextStatus }).then(() => {
          message.success(successMessage);
          reloadPaginatedData();
        });
      },
    });
  };

  const handleDeleteRow = () => {
    confirmation({
      type: 'multi',
      title: 'Xác nhận',
      message: 'Xác nhận xoá đơn đặt bàn này?',
      onSubmit: () => {
        processDeleteQuery(`${apiPath}/${row.id}`).then(() => {
          message.success('Xoá đơn đặt bàn thành công');
          reloadPaginatedData();
        });
      },
    });
  };

  return (
    <Space size="middle" className="flex gap-1" onClick={(e) => e.stopPropagation()}>
      {row.status === ENUM_BOOKING_STATUS.new && (
        <Button
          size="middle"
          onClick={() =>
            handleUpdateRow(ENUM_BOOKING_STATUS.verified, 'Xác thực đơn đặt bàn?', 'Xác thực đơn đặt bàn thành công')
          }
        >
          Xác thực
        </Button>
      )}
      {row.status === ENUM_BOOKING_STATUS.verified && (
        <Button
          size="middle"
          onClick={() =>
            handleUpdateRow(
              ENUM_BOOKING_STATUS.finished,
              'Khách hàng đã dùng bữa?',
              'Xác nhận khách hàng đã dùng bữa thành công'
            )
          }
        >
          Đã dùng bữa
        </Button>
      )}
      {row.status === ENUM_BOOKING_STATUS.finished && (
        <Button
          size="middle"
          onClick={() =>
            handleUpdateRow(ENUM_BOOKING_STATUS.done, 'Khách hàng đã thanh toán?', 'Xác đã thanh toán thành công')
          }
        >
          Đã thanh toán
        </Button>
      )}
      <Button danger size="middle" onClick={handleDeleteRow}>
        Xoá
      </Button>
    </Space>
  );
}

export default BookingAction;
