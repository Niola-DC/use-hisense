import React from "react";
import { Outlet } from "react-router-dom";

import MenuProvider from "../hooks/useMenu";
import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";

export default function RootLayout() {
  return (
    <MenuProvider>
      <Header />
      <main>
        {/* CHILDREN- DIFFERENT PAGES */}
        <Outlet />
      </main>
      <Footer />
    </MenuProvider>
  );
}
