import React from "react";
import "./MainBody.css";

export default function MainBody({ vendors }) {
  return (
    <main className="main-body">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="vendor-card">
          <h3>{vendor.name}</h3>
          <p>{vendor.description}</p>
        </div>
      ))}
    </main>
  );
}
