import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile submitted: ${name}, ${email}`);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="form-overlay" onClick={onClose}>
      <form className="profile-form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={onClose}>✕</button>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
