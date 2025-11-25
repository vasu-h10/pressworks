import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <img src={vendor.photoURL} alt="Vendor" className="vendor-img" />
      <h3>{vendor.restaurantName}</h3>
      <p>{vendor.firstName} {vendor.lastName}</p>
      <p>📍 {vendor.restaurantLocation}</p>
      <p>📞 {vendor.phone}</p>
    </div>
  );
}
