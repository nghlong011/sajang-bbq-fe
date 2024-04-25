import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'store';
import { actionCloseAppConfirmation, selectAppConfirmation } from 'store/appSlice';

function AppConfirmation() {
  const { isOpen, type, message, title, onCancel, onSubmit } = useAppSelector(selectAppConfirmation);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(actionCloseAppConfirmation());
  };

  const handleSubmit = () => {
    onSubmit && onSubmit();
    handleClose();
  };

  const handleCancel = () => {
    onCancel && onCancel();
    handleClose();
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      width={400}
      onCancel={handleClose}
      footer={
        type === 'single' ? (
          <Button type="primary" onClick={handleSubmit}>
            Xác nhận
          </Button>
        ) : (
          <div className="flex justify-end">
            <Button onClick={handleCancel}>Hủy</Button>
            <Button type="primary" onClick={handleSubmit}>
              Xác nhận
            </Button>
          </div>
        )
      }
    >
      <p>{message}</p>
    </Modal>
  );
}

export default AppConfirmation;
