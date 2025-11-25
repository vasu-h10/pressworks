import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <h3>{vendor.firstName} {vendor.lastName}</h3>
      <p>Phone: {vendor.phone}</p>
      <p>Restaurant: {vendor.restaurantName}</p>
      <p>Location: {vendor.restaurantLocation}</p>
    </div>
  );
}
