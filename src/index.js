import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './i18n';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import {UserProvider} from './context/usuarioContext';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
// import global_fr from './translations/fr/global.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <UserProvider>
    <App />
    </UserProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

