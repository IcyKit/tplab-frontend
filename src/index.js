import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <Suspense fallback={<div>Загрузка...</div>}> */}
    <App />
    {/* </Suspense> */}
  </Provider>
);
