import type { TableProps } from 'antd';
import { Button, Table, Image } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import TableAction from 'app/components/custom/TableAction';
import { modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { modalForm } from 'utils/app';

const columns: TableProps<any>['columns'] = [
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Hình ảnh',
    key: 'image',
    render: (_, record: DynamicKeyObject) => (
      <Image width={150} height={100} src={`${import.meta.env.VITE_API_ENPOINT}/${record?.imageUrl}`} />
    ),
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => (
      <TableAction row={{ ...record, avatar: record.imageUrl }} apiPath={modalFormConfig.blog.apiPath} />
    ),
  },
];

const BlogMangament = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.blog)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.blogs} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={modalFormConfig.blog.apiPath} />
    </>
  );
};

export default BlogMangament;
