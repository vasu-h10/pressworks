import React from "react";
import "./MainBody.css";
import VendorList from "./VendorList";

export default function MainBody({ vendors }) {
  return (
    <div className="main-body">
      <VendorList vendors={vendors} />
    </div>
  );
}
