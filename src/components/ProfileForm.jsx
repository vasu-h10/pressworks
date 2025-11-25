import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./ProfileForm.css";

export default function ProfileForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let photoURL = "";

    if (photo) {
      const imageRef = ref(storage, `vendor_photos/\${photo.name}`);
      await uploadBytes(imageRef, photo);
      photoURL = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, "vendors"), {
      firstName,
      lastName,
      phone,
      restaurantName,
      restaurantLocation,
      photoURL,
      createdAt: Date.now(),
    });

    alert("Vendor added!");

    setFirstName("");
    setLastName("");
    setPhone("");
    setRestaurantName("");
    setRestaurantLocation("");
    setPhoto(null);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
      <input value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="Restaurant Name" required />
      <input value={restaurantLocation} onChange={(e) => setRestaurantLocation(e.target.value)} placeholder="Restaurant Location" required />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <button type="submit">Save Vendor</button>
    </form>
  );
}
