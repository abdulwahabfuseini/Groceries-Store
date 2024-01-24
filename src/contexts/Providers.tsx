"use client";

import { persistor, Store } from "@/redux/Store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={Store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};

export default Providers;
