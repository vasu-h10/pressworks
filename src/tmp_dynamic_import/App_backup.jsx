import React from "react";
import Header from "./components/Header";
import VendorList from "./components/VendorList";
import ProfileForm from "./components/ProfileForm";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function App() {

  const handleSaveProfile = async (profileData) => {
    try {
      // Add new vendor to Firestore
      const docRef = await addDoc(collection(db, "vendors"), profileData);
      console.log("Vendor saved with ID: ", docRef.id);
    } catch (err) {
      console.error("Error saving vendor: ", err);
    }
  };

  return (
    <>
      <Header onSaveProfile={handleSaveProfile} />
      <VendorList />
    </>
  );
}
