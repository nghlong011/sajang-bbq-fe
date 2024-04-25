import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { DynamicKeyObject, IFormProps } from 'model';
import { RootState } from 'store';

export interface IConfirmation {
  isOpen?: boolean;
  type: 'single' | 'multi';
  message: string;
  title: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export interface IModalForm {
  isOpen?: boolean;
  title: string;
  apiPath: string;
  editedRow?: DynamicKeyObject;
  width?: number;
  isFormData?: boolean;
  formElement: ((props: IFormProps) => JSX.Element) | null;
}

export interface IPagination {
  current: number;
  size: number;
}

export interface IAppState {
  isLoading: boolean;
  confirmation: IConfirmation;
  modal: IModalForm;
  pagination: IPagination;
}

const initialState: IAppState = {
  isLoading: false,
  confirmation: {
    isOpen: false,
    type: 'single',
    message: '',
    title: '',
    onSubmit: () => {},
    onCancel: () => {},
  },
  modal: {
    isOpen: false,
    title: '',
    formElement: null,
    apiPath: '',
  },
  pagination: {
    current: 1,
    size: 10,
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    actionAppLoadingOff(state) {
      state.isLoading = false;
    },
    actionAppLoadingOn(state) {
      state.isLoading = true;
    },
    actionCloseAppConfirmation(state) {
      state.confirmation = initialState.confirmation;
    },
    actionOpenAppConfirmation(state, action: PayloadAction<IConfirmation>) {
      state.confirmation = { ...action.payload, isOpen: true };
    },
    actionCloseAppModalForm(state) {
      state.modal = initialState.modal;
    },
    actionOpenAppModalForm(state, action: PayloadAction<IModalForm>) {
      state.modal = { ...action.payload, isOpen: true };
    },
    actionUpdateAppPagination(state, action: PayloadAction<IPagination>) {
      state.pagination = action.payload;
    },
    actionReloadPaginatedData(state) {
      state.pagination = cloneDeep(state.pagination);
    },
  },
});

export const {
  actionAppLoadingOff,
  actionAppLoadingOn,
  actionCloseAppConfirmation,
  actionOpenAppConfirmation,
  actionCloseAppModalForm,
  actionOpenAppModalForm,
  actionUpdateAppPagination,
  actionReloadPaginatedData,
} = slice.actions;

export const selectAppLoading = (state: RootState) => state.app.isLoading;
export const selectAppConfirmation = (state: RootState) => state.app.confirmation;
export const selectAppModalForm = (state: RootState) => state.app.modal;
export const selectAppPagination = (state: RootState) => state.app.pagination;

export default slice.reducer;
