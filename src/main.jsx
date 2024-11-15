import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <NextUIProvider>
        <Provider store={store}>
          <App />
        </Provider>
        <Toaster position="bottom-right" reverseOrder={true} />
      </NextUIProvider>
    </ChakraProvider>
  </StrictMode>
);
