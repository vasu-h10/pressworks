import React from "react";
import VendorList from "./VendorList";

export default function MainBody({ vendorProfiles }) {
  return (
    <div className="main-body">
      <VendorList vendorProfiles={vendorProfiles} />
    </div>
  );
}
