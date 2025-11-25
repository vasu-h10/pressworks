import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";
import "./ProfileForm.css";

const db = getFirestore(app);

export default function ProfileForm({ onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vendorData = {
      firstName,
      lastName,
      phone,
      restaurantName,
      restaurantLocation,
      profilePicture: profilePicture ? profilePicture.name : null
    };
    try {
      await addDoc(collection(db, "vendors"), vendorData);
      if (onSave) onSave(vendorData);
      // Reset form
      setFirstName("");
      setLastName("");
      setPhone("");
      setRestaurantName("");
      setRestaurantLocation("");
      setProfilePicture(null);
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
      <input value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="Restaurant Name" required />
      <input value={restaurantLocation} onChange={(e) => setRestaurantLocation(e.target.value)} placeholder="Restaurant Location" required />
      <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
      <button type="submit">Save</button>
    </form>
  );
}
