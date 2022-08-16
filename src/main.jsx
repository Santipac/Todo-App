import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  </Provider>
  /* </React.StrictMode> */
);
