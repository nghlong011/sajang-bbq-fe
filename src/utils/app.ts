import { store } from 'store';
import {
  IConfirmation,
  IModalForm,
  actionAppLoadingOff,
  actionAppLoadingOn,
  actionCloseAppModalForm,
  actionOpenAppConfirmation,
  actionOpenAppModalForm,
  actionReloadPaginatedData,
} from 'store/appSlice';

export const getPageName = () => window.location.pathname.split('/').pop() || 'home';

export const loading = {
  on: () => {
    store.dispatch(actionAppLoadingOn());
  },
  off: () => {
    store.dispatch(actionAppLoadingOff());
  },
};

export const confirmation = (config: IConfirmation) => {
  store.dispatch(actionOpenAppConfirmation(config));
};

export const modalForm = {
  open: (config: IModalForm) => {
    store.dispatch(actionOpenAppModalForm(config));
  },
  close: () => {
    store.dispatch(actionCloseAppModalForm());
  },
};

export const reloadPaginatedData = () => {
  store.dispatch(actionReloadPaginatedData());
};
