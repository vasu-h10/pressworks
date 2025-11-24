import React from "react";
import "./VendorCard.css";

export default function VendorList({ vendorProfiles }) {
  if (!vendorProfiles || vendorProfiles.length === 0) {
    return <p>No vendor profiles yet. Please fill the profile form.</p>;
  }

  return (
    <div className="vendor-list">
      {vendorProfiles.map((vendor, index) => (
        <div className="vendor-card" key={index}>
          <h4>{vendor.firstName} {vendor.lastName}</h4>
          <p>{vendor.hotel}</p>
          <p>{vendor.mobile}</p>
          {vendor.profilePic && <img src={vendor.profilePic} alt={`${vendor.firstName} ${vendor.lastName}`} className="vendor-pic" />}
        </div>
      ))}
    </div>
  );
}
