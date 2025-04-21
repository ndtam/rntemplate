// test-utils.js
import * as React from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import { PaperProvider } from "react-native-paper";

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PaperProvider>
        {children}
      </PaperProvider>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement, options: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
