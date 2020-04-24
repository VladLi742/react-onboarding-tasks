import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { hot } from "react-hot-loader/root";

import { store, persistor } from "./redux/store";

import GlobalStyles from "./globalStyles";
import Filter from "./components/Filter";
import List from "./components/List";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <GlobalStyles />
          <Filter />
          <List />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
}

export default hot(App);
