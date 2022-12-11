import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
