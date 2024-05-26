// components/Layout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="hidden lg:block fixed top-0 w-full opacity-100 z-50">
        <MainNav />
      </div>
      <div className="mt-20">
        <div className="min-h-screen flex flex-col scroll-smooth overflow-hidden lg:max-w-full">
          <div className="hidden lg:flex">
            <div className="w-96 px-4 py-6 flex-col"> 
              <Header />
            </div>
            <div className="flex-1 flex flex-row">
              <main className="mx-auto max-w-screen-lg">{children}</main>
            </div>
          </div>

          <div className="lg:hidden flex-row">
            <Header />
            <main className="px-4 flex-grow-0 mx-auto max-w-screen-lg">{children}</main>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
