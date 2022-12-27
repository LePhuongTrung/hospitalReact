import React from "react";
import { Outlet } from "react-router-dom";
import SaleHeader from "../../components/Sale/SaleHeader";

function Sales() {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full">
      <SaleHeader />
      <Outlet />
    </div>
  );
}

export default Sales;
