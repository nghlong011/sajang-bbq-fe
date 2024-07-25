import type { TableProps } from 'antd';
import { Button, Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import TableAction from 'app/components/custom/TableAction';
import { modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { modalForm } from 'utils/app';

const columns: TableProps<any>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên món ăn',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Giá món ăn',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    key: 'role',
    render: (role) => (role == '1' ? 'Món chính' : 'Món phụ'),
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => <TableAction row={record} apiPath={modalFormConfig.dish.apiPath} />,
  },
];

const DishMangament = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.dish)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.dishes} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={modalFormConfig.dish.apiPath} />
    </>
  );
};

export default DishMangament;
