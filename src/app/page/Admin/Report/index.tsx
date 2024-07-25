import type { TableProps } from 'antd';
import { Table } from 'antd';

interface IProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  content: string;
}

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
];

const ReportMangament = () => {
  const data: IProps[] = [
    {
      id: '1',
      name: 'Long',
      phone: '123456789',
      email: 'nghlong011@gmail.com',
      content: 'khiếu nại1',
    },
    {
      id: '2',
      name: 'Minh',
      phone: '123456789',
      email: 'minh@gmail.com',
      content: 'khiếu nại1',
    },
    {
      id: '3',
      name: 'Huy',
      phone: '123456789',
      email: 'huy@gmail.com',
      content: 'khiếu nại1',
    },
    {
      id: '4',
      name: 'Tung',
      phone: '123456789',
      email: 'tung@gmail.com',
      content: 'khiếu nại1',
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default ReportMangament;
