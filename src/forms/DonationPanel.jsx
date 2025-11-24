import React, { useState } from "react";
import "./DonationPanel.css"; // <-- Import the CSS file

export default function DonationPanel() {
  const [amount, setAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount}`);
    setAmount("");
  };

  return (
    <form className="donation-panel" onSubmit={handleDonate}>
      <input
        type="number"
        placeholder="Amount $"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        min="1"
      />
      <button type="submit">Donate</button>
    </form>
  );
}