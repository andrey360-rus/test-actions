import React, { FC, useEffect } from "react";
import NavBar from "./components/NavBar";
import MainRouter from "./app/routing";
import ConfigProvider from "./providers/configProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import firebase from "./firebase";

const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const App: FC = () => {
   // useEffect(() => {
   //    const messaging = firebase.messaging();
   //    messaging
   //       .requestPermission()
   //       .then(() => {
   //          return messaging.getToken();
   //       })
   //       .then((token) => {
   //          prompt("token", token);
   //       })
   //       .catch((err) => {
   //          console.error("error", err);
   //       });
   //    // eslint-disable-next-line
   // }, []);

   return (
      <QueryClientProvider client={client}>
         <ConfigProvider>
            <NavBar />
            <MainRouter />
         </ConfigProvider>
      </QueryClientProvider>
   );
};
export default App;
