import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global-styles.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "../AuthContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>,
);
