import React from "react";
import "./MainLayout.css";
import Header from "../../components/common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
