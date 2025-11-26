import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import "./ProfileForm.css";

export default function ProfileForm({ onSave }) {
  const [vendorId, setVendorId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [currentPicUrl, setCurrentPicUrl] = useState("");

  // Load existing vendor data if vendorId exists
  useEffect(() => {
    if (!vendorId) return;
    const docRef = doc(db, "vendors", vendorId);
    getDoc(docRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhone(data.phone);
        setRestaurantName(data.restaurantName);
        setRestaurantLocation(data.restaurantLocation);
        setCurrentPicUrl(data.profilePicUrl || "");
      }
    });
  }, [vendorId]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Vendor name required!");
      return;
    }

    const docRef = doc(db, "vendors", vendorId || firstName + lastName); // unique by name
    const existingData = await getDoc(docRef);

    let picUrl = currentPicUrl;

    if (profilePic) {
      // Delete previous picture if exists
      if (existingData.exists() && existingData.data().profilePicUrl) {
        const prevRef = ref(storage, existingData.data().profilePicUrl);
        await deleteObject(prevRef).catch(()=>{});
      }
      const storageRef = ref(storage, `profilePics/${docRef.id}`);
      await uploadBytes(storageRef, profilePic);
      picUrl = await getDownloadURL(storageRef);
    }

    const dataToSave = {
      firstName,
      lastName,
      email,
      phone,
      restaurantName,
      restaurantLocation,
      profilePicUrl: picUrl,
    };

    await setDoc(docRef, dataToSave, { merge: true }); // merge ensures independent updates
    onSave && onSave(dataToSave);
    setVendorId(docRef.id);
    alert("Profile saved successfully!");
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" />
      <input value={restaurantName} onChange={e => setRestaurantName(e.target.value)} placeholder="Restaurant Name" />
      <input value={restaurantLocation} onChange={e => setRestaurantLocation(e.target.value)} placeholder="Restaurant Location" />
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {currentPicUrl && <img src={currentPicUrl} alt="Profile" style={{width:100,height:100}} />}
      <button type="submit">Save Profile</button>
    </form>
  );
}
