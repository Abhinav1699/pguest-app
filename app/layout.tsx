"use client";
import React from "react";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <NavBar />
          <main className="max-w-3xl mx-auto py-10">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
