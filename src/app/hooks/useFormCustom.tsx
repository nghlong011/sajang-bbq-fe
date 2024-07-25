import { message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { processPostQuery, processPutQuery } from 'api';
import { keys } from 'lodash';
import { DynamicKeyObject } from 'model';
import moment from 'moment';
import { loading, reloadPaginatedData } from 'utils/app';

interface IProps {
  apiPath: string;
  onClose: () => void;
  editedRow?: DynamicKeyObject;
  isFormData?: boolean;
}

function useFormCustom(props: IProps) {
  const { apiPath, editedRow, isFormData, onClose } = props;
  const [form] = useForm();

  const generateFormData = (formValues: any) => {
    const formData = new FormData();
    keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    return formData;
  };

  const handleCallApi = (formValues: any) => {
    loading.on();
    console.log('formValues', formValues);
    const formData = generateFormData(formValues);
    const url = !editedRow?.id ? apiPath : `${apiPath}/${editedRow.id}`;
    const queryFn = !editedRow?.id ? processPostQuery : processPutQuery;
    if (formValues.price) {
      const updatedFormValues = {
        ...formValues,
        price: Number(formValues.price),
      };
      queryFn(url, updatedFormValues, isFormData).then(() => {
        onClose();
        message.success('Cập nhật thông tin thành công');
        reloadPaginatedData();
      });
    } else {
      queryFn(url, formData, isFormData).then(() => {
        onClose();
        message.success('Cập nhật thông tin thành công');
        reloadPaginatedData();
      });
    }
  };

  const onSubmitForm = () => {
    form
      .validateFields()
      .then((values) => {
        handleCallApi(values);
      })
      .catch(() => Promise.resolve());
  };

  return { form, onSubmitForm };
}

export default useFormCustom;
