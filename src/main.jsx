import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./Components/Store.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Store>
    <App />
    <ToastContainer autoClose={150} transition={Flip} />
  </Store>
);
