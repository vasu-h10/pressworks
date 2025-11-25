import React from "react";
import VendorCard from "./VendorCard";
import "./VendorList.css";

export default function VendorList({ vendors }) {
  if (!vendors.length) return <p>No vendors yet.</p>;
  return (
    <div className="vendor-list">
      {vendors.map((vendor, idx) => (
        <VendorCard key={idx} vendor={vendor} />
      ))}
    </div>
  );
}

