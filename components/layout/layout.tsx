import React from "react";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
