import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

  const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App  />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>

);

reportWebVitals();
