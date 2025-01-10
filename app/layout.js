"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { HeroContext, HeroProvider } from "./context/HeroContxt";
import{store} from "./redux/store";
import { Provider } from "react-redux";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Provider store={store}>
          <HeroProvider>
            <Navbar />
            {children}
          </HeroProvider>
        </Provider>
      </body>
    </html>
  );
}
