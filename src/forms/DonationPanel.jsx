import React from "react";

export default function DonationPanel({ onClose }) {
  return (
    <div>
      <p>Donation Panel</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
