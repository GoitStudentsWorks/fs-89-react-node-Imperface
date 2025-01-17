import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

export const theme = {
  blue: 'rgb(0, 0, 255)',
  yellow: '#FFFF00',
  black: '#000',
  white: '#fff',

  startPageTxtColor: '#fafafa',

  blackColor: '#0a0a11',
  blackFortyColor: 'rgba(10, 10, 17, 0.4)',
  blackFiftyColor: 'rgba(10, 10, 17, 0.5)',

  darkBlueColor: '#161f37',
  darkBlueTwentyColor: 'rgba(22, 31, 55, 0.2)',
  darkBlueFiftyColor: 'rgba(22, 31, 55, 0.5)',

  greyColor: '#434d67',

  blueColor: '#4070cd',
  blueFiftyColor: 'rgba(64, 112, 205, 0.5)',

  lightGreenColor: '#bce6d2',
  lightFortyGreenColor: 'rgba(188, 230 210, 0.4)',

  whiteColor: '#f3f3f3',
  whiteZeroColor: 'rgba(243, 243, 243, 0)',
  whiteTenColor: 'rgba(243, 243, 243, 0.1)',
  whiteTwentyColor: 'rgba(243, 243, 243, 0.2)',
  whiteThirtyColor: 'rgba(243, 243, 243, 0.3)',
  whiteFortyColor: 'rgba(243, 243, 243, 0.4)',
  whiteFiftyColor: 'rgba(243, 243, 243, 0.5)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/fs-89-react-node-Imperface/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
