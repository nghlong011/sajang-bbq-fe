import type { TableProps } from 'antd';
import { Button, Image, Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import TableAction from 'app/components/custom/TableAction';
import { modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { modalForm } from 'utils/app';

const columns: TableProps<any>['columns'] = [
  {
    title: 'Ảnh chi nhánh',
    key: 'image',
    render: (_, record: DynamicKeyObject) => (
      <Image width={150} height={100} src={`${import.meta.env.VITE_API_ENPOINT}/${record?.avatar}`} />
    ),
  },
  {
    title: 'Tên chi nhánh',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số lượng bàn',
    dataIndex: 'table',
    key: 'table',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record: DynamicKeyObject) => (
      <TableAction
        row={{ ...record, utils: record.utils.map((util: DynamicKeyObject) => util.UtilityId) }}
        apiPath={modalFormConfig.branch.apiPath}
      />
    ),
  },
];

const Branch = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.branch)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.branch} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={modalFormConfig.branch.apiPath} />
    </>
  );
};

export default Branch;
