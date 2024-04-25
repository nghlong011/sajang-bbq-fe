import type { TableProps } from 'antd';
import { Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import BookingAction from 'app/components/custom/BookingAction';
import { BOOKING_STATUS } from 'constants/app';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import DetailBooking from './DetailBooking';

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
  {
    title: 'Khách hàng',
    key: 'customer',
    render: (_, record: DynamicKeyObject) => `${record?.customer?.firstName} ${record?.customer?.lastName}`,
  },
  {
    title: 'Số điện thoại',
    key: 'phone',
    render: (_, record: DynamicKeyObject) => record?.customer?.phone,
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => <BookingAction row={record} apiPath="/booking" />,
  },
];

const BookingMangament = () => {
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
      <AppPagination onChangeDataTable={setData} apiPath={'/booking'} />
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

export default BookingMangament;
