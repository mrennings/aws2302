import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

const theme = extendTheme({
    fonts: {
      heading: `'Raleway', 'Roboto', 'sans-serif'`,
      body: `'Raleway', 'Roboto', 'sans-serif'`
    },
    colors: {
      mr: {
        green: "#7ebe3f",
        black: "#292727",
        white: "#faf4f4"
      },
    },
    styles: {
      global: {
        body: {
          bg: "#faf4f4",
          color: "#292727"
        }
      }
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
