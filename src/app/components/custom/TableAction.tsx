import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, message } from 'antd';
import { processDeleteQuery } from 'api';
import { IModalConfigKey, modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { confirmation, getPageName, modalForm, reloadPaginatedData } from 'utils/app';

interface IProps {
  row: DynamicKeyObject;
  apiPath: string;
}

function TableAction(props: Readonly<IProps>) {
  const pageName = getPageName() as IModalConfigKey;
  const { row, apiPath } = props;

  const handleEditRow = () => {
    modalForm.open({
      ...modalFormConfig[pageName],
      editedRow: row,
    });
  };

  const handleDeleteRow = () => {
    confirmation({
      type: 'multi',
      title: 'Xác nhận',
      message: 'Bạn chắc chắn muốn xoá bản ghi này?',
      onSubmit: () => {
        processDeleteQuery(`${apiPath}/${row.id}`).then(() => {
          message.success('Xoá bản ghi thành công');
          reloadPaginatedData();
        });
      },
    });
  };

  return (
    <Space size="middle" className="flex gap-1">
      <Button
        type="text"
        className="hover:!bg-[#fff6da]"
        icon={<EditOutlined className="text-warning" />}
        size="middle"
        onClick={handleEditRow}
      />
      <Button type="text" danger icon={<DeleteOutlined />} size="middle" onClick={handleDeleteRow} />
    </Space>
  );
}

export default TableAction;
