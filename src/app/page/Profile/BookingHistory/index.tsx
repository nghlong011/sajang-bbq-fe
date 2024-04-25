import type { TableProps } from 'antd';
import { Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import BookingAction from 'app/components/custom/BookingAction';
import DetailBooking from 'app/page/Admin/Booking/DetailBooking';
import { BOOKING_STATUS } from 'constants/app';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { useAppSelector } from 'store';
import { selectUser } from 'store/authSlice';

const columns: TableProps<any>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    render: (_, record: DynamicKeyObject) => BOOKING_STATUS[record.status],
  },
  {
    title: 'Thời gian',
    key: 'time',
    render: (_, record: DynamicKeyObject) => record.schedule?.time,
  },
  {
    title: 'Ngày',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Chi nhánh',
    key: 'branch',
    render: (_, record: DynamicKeyObject) => record?.branch?.name,
  },
];

const BookingHistory = () => {
  const user = useAppSelector(selectUser);
  const [data, setData] = useState<DynamicKeyObject>({});
  const [isOpenDetailBooking, setIsOpenDetailBooking] = useState<boolean>(false);
  const [clickedRow, setClickedRow] = useState<DynamicKeyObject>({});

  const handleClickRow = (record: any) => {
    setClickedRow(record);
    setIsOpenDetailBooking(true);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data.booking}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleClickRow(record),
        })}
      />
      <AppPagination onChangeDataTable={setData} apiPath={'/booking'} params={{ customerId: user.id }} />
      {isOpenDetailBooking && (
        <DetailBooking
          isOpen={isOpenDetailBooking}
          handleCloseModal={() => setIsOpenDetailBooking(false)}
          handleSubmitForm={() => setIsOpenDetailBooking(false)}
          row={clickedRow}
        />
      )}
    </>
  );
};

export default BookingHistory;
