import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
const root = document.getElementById("root");
import { ToastContainer } from "react-toastify";

createRoot(root).render(
  <Provider store={store}>
    <ToastContainer position="top-right" />
    <App />
  </Provider>
);
