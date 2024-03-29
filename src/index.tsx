import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";
import { store } from "./redux/store";
import App from "./components/App/App";
import "@fontsource/poppins";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
