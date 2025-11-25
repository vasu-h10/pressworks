import React from "react";
import VendorList from "./VendorList.jsx";
import "./MainBody.css";

export default function MainBody({ vendors }) {
  return (
    <main className="main-body">
      <VendorList vendors={vendors} />
    </main>
  );
}
