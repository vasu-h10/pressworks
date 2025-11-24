import React, { useState } from "react";
import "./ProfileForm.css"; // <-- Import the CSS file

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile submitted: ${name}, ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
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
  );
}