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
    title: 'Tên khách hàng',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Nội dung phản ánh',
    dataIndex: 'content',
    key: 'content',
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

const ReportMangament = () => {
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

export default ReportMangament;
