import React from "react";
import VendorCard from "./VendorCard.jsx";
import "./VendorList.css";

export default function VendorList({ vendors }) {
  if (!vendors || vendors.length === 0) {
    return <p className="no-vendors">No vendors available</p>;
  }

  return (
    <div className="vendor-list">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
