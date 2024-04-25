import { Modal } from 'antd';
import useFormCustom from 'app/hooks/useFormCustom';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { selectAppModalForm } from 'store/appSlice';
import { modalForm } from 'utils/app';

const AppModalForm = () => {
  const {
    isOpen,
    title,
    apiPath,
    width,
    editedRow,
    isFormData,
    formElement: FormElement,
  } = useAppSelector(selectAppModalForm);
  const [imageUrl, setImageUrl] = useState('');

  const handleCloseModal = () => {
    form.resetFields();
    setImageUrl('');
    modalForm.close();
  };

  const { form, onSubmitForm } = useFormCustom({
    apiPath,
    editedRow,
    isFormData,
    onClose: handleCloseModal,
  });

  useEffect(() => {
    if (!isEmpty(editedRow)) {
      form.setFieldsValue({ ...editedRow, password: 'hardcode', rePassword: 'hardcode', avatar: '' });
      editedRow.avatar && setImageUrl(`${import.meta.env.VITE_API_ENPOINT}/${editedRow.avatar}`);
    }
  }, [editedRow]);

  return (
    <Modal
      title={title}
      centered
      open={isOpen}
      width={width ?? 1000}
      onOk={onSubmitForm}
      onCancel={handleCloseModal}
      maskClosable={false}
    >
      {FormElement && <FormElement form={form} imageUrl={imageUrl} onChangeImageUrl={setImageUrl} />}
    </Modal>
  );
};

export default AppModalForm;
