import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle'
import TypoGraphy from './styles/Typography'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <TypoGraphy />
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
