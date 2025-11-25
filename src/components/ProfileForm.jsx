import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ProfileForm.css";

export default function ProfileForm({ onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "vendors"), {
      firstName,
      lastName,
      phone,
      restaurantName,
      location,
      fileName: file ? file.name : null,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    onSave && onSave({ firstName, lastName, phone, restaurantName, location });
    setFirstName(""); setLastName(""); setPhone(""); setRestaurantName(""); setLocation(""); setFile(null);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
      <input value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="Restaurant Name" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Save</button>
    </form>
  );
}
