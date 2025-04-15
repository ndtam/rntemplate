import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { PaperProvider } from "react-native-paper";

interface Props {
  children: React.ReactNode;
}

function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      {/* provides the theme to all the components in the framework. */}
      <PaperProvider>
        {/* PersistGate Nó sẽ delay quá trình render UI app của bạn 
        cho đến khi state đã được lấy ra và lưu trở lại vào Redux. 
        2 props loading và persistor đều yêu cầu phải có */}
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

export default ReduxProvider;
