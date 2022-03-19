import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { defaultTheme } from './theme/theme';
import App from './components/App';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
