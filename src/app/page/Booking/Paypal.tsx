import { message } from 'antd';
import { processPutQuery } from 'api';
import { DynamicKeyObject, ENUM_BOOKING_STATUS } from 'model';
import { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

function Paypal(
  props: Readonly<{
    isShow: boolean;
    onCloseModal: () => void;
    createdBooking: DynamicKeyObject;
    onChangeCreatedBooking: React.Dispatch<React.SetStateAction<DynamicKeyObject>>;
  }>
) {
  const { isShow, onCloseModal, createdBooking, onChangeCreatedBooking } = props;
  const [isSdkReady, setIsSdkReady] = useState(false);

  const handleDepositSuccess = (details: any) => {
    processPutQuery(`booking/${createdBooking.id}`, { status: ENUM_BOOKING_STATUS.new }).then(() => {
      message.success(
        `Thanh toán thành công với tên chủ thẻ: ${details.payer?.name?.given_name} ${details.payer?.name?.surname}`
      );
      onCloseModal();
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=sb`;
    script.async = true;
    script.onload = () => {
      setIsSdkReady(true);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {isSdkReady && (
        <div className="paypal-button-container" hidden={!isShow}>
          <PayPalButton
            style={{
              layout: 'horizontal',
              tagline: false,
            }}
            amount="5"
            onSuccess={handleDepositSuccess}
            onError={() => {
              message.error('Có lỗi xảy ra');
            }}
          />
        </div>
      )}
    </>
  );
}

export default Paypal;
