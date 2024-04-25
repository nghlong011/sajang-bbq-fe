import { DynamicKeyObject, ENUM_BOOKING_STATUS } from 'model';

export const BOOKING_STATUS: DynamicKeyObject = {
  [ENUM_BOOKING_STATUS.notDeposit]: 'Chưa đặt cọc',
  [ENUM_BOOKING_STATUS.new]: 'Đơn mới',
  [ENUM_BOOKING_STATUS.verified]: 'Đã xác thực',
  [ENUM_BOOKING_STATUS.finished]: 'Đã dùng bữa',
  [ENUM_BOOKING_STATUS.done]: 'Đã thanh toán',
};
