import React from "react";
import "./MainBody.css";
import VendorList from "./VendorList.jsx";

export default function MainBody({ vendors, vendorProfiles }) {
  return (
    <div className="main-body">
      <VendorList vendorProfiles={vendorProfiles} vendors={vendors} />
    </div>
  );
}
