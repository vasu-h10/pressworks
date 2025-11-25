import React from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <img
        src={vendor.profilePicture || "/default-profile.png"}
        alt={`${vendor.firstName} ${vendor.lastName}`}
        className="vendor-img"
      />
      <div className="vendor-info">
        <h3>{vendor.firstName} {vendor.lastName}</h3>
        <p>Restaurant: {vendor.restaurantName}</p>
        <p>Phone: {vendor.phone}</p>
        <p>Location: {vendor.location}</p>
      </div>
    </div>
  );
}
