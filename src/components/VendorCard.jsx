import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      {vendor.profilePicUrl && (
        <img src={vendor.profilePicUrl} alt={`${vendor.firstName} ${vendor.lastName}`} className="vendor-pic" />
      )}
      <h3>{vendor.firstName} {vendor.lastName}</h3>
      <p>Email: {vendor.email}</p>
      <p>Phone: {vendor.phone}</p>
      <p>Restaurant: {vendor.restaurantName}</p>
      <p>Location: {vendor.restaurantLocation}</p>
    </div>
  );
}
