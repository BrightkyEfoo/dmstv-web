import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import theme from "./theme";
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( <StrictMode>
  <ChakraProvider resetCSS theme={theme}>
    <App />
    </ChakraProvider>
  </StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
