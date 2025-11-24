import React, { useState } from "react";

export default function ProfileForm({ onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <button type="submit">Save</button>
    </form>
  );
}
