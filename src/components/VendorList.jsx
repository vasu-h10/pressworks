// src/components/VendorList.jsx
import React from "react";
import VendorCard from "./VendorCard";
import "./VendorList.css";

export default function VendorList({ vendors }) {
  if (!vendors || vendors.length === 0) return <p>No vendors yet.</p>;

  return (
    <div className="vendor-list">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
