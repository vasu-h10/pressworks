// src/components/VendorCard.jsx
import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  if (!vendor) return null;

  return (
    <div className="vendor-card">
      <div className="vendor-photo">
        {vendor.photoURL ? (
          <img src={vendor.photoURL} alt={`${vendor.firstName} ${vendor.lastName}`} />
        ) : (
          <div className="placeholder-photo">No Photo</div>
        )}
      </div>
      <div className="vendor-info">
        <h3>{vendor.firstName} {vendor.lastName}</h3>
        <p><strong>Restaurant:</strong> {vendor.restaurantName}</p>
        <p><strong>Location:</strong> {vendor.restaurantLocation}</p>
        <p><strong>Email:</strong> {vendor.email}</p>
        <p><strong>Phone:</strong> {vendor.phone}</p>
      </div>
    </div>
  );
}
