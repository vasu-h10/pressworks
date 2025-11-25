import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <h3>{vendor.firstName} {vendor.lastName}</h3>
      <p>{vendor.restaurantName}</p>
      <p>{vendor.phone}</p>
      <p>{vendor.location}</p>
      {vendor.fileName && <p>File: {vendor.fileName}</p>}
    </div>
  );
}
