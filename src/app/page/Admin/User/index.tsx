import type { TableProps } from 'antd';
import { Avatar, Button, Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import TableAction from 'app/components/custom/TableAction';
import { modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { modalForm } from 'utils/app';

const columns: TableProps<any>['columns'] = [
  {
    title: 'Ảnh đại diện',
    key: 'avatar',
    render: (_, record: DynamicKeyObject) => <Avatar src={`${import.meta.env.VITE_API_ENPOINT}/${record?.avatar}`} />,
  },
  {
    title: 'Họ',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Tên',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => <TableAction row={record} apiPath={modalFormConfig.user.apiPath} />,
  },
];

const User = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.user)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.user} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={modalFormConfig.user.apiPath} />
    </>
  );
};

export default User;
