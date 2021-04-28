import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//GLOBAL STYLES
import GlobalStyle from 'Styles/Global';
//COLORS
import Theme from 'Styles/Theme';

import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={Theme} >
    <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
