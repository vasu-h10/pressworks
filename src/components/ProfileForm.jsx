import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm({ onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ firstName, lastName, phone, restaurantName, restaurantLocation });
    setFirstName(""); setLastName(""); setPhone(""); setRestaurantName(""); setRestaurantLocation("");
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" required />
      <input value={restaurantName} onChange={e => setRestaurantName(e.target.value)} placeholder="Restaurant Name" required />
      <input value={restaurantLocation} onChange={e => setRestaurantLocation(e.target.value)} placeholder="Restaurant Location" required />
      <button type="submit">Save</button>
    </form>
  );
}
