import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
export const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
