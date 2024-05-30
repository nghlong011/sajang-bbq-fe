import AppConfirmation from 'app/components/common/AppConfirmation';
import AppLoading from 'app/components/common/AppLoading';
import AppModalForm from 'app/components/common/AppModalForm';
import Routers from 'app/routers';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import './utils/chartSetup';
import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppLoading />
      <AppConfirmation />
      <AppModalForm />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
