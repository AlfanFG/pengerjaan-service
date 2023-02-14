import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import store from '@/store/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const presistStore = persistStore(store)
  return (
    <>
    
    <Provider store={store}>
    <PersistGate persistor={presistStore}>
      <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
        <Component {...pageProps} />
      </MantineProvider>
      </PersistGate>
      </Provider>
    </>
  );
}