import { FormProps } from 'antd';

export interface DynamicKeyObject {
  [key: number | string]: any;
}

export interface IFormProps extends FormProps {
  imageUrl: string;
  onChangeImageUrl: (base64: string) => void;
}

export enum ENUM_USER_ROLE {
  admin = 'ADMIN',
  customer = 'CUSTOMER',
}

export enum ENUM_BOOKING_STATUS {
  notDeposit = 'NOT_DEPOSIT',
  new = 'NEW',
  verified = 'VERIFIED',
  finished = 'FINISHED',
  done = 'DONE',
}
