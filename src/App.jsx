import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function App() {
  const [vendors, setVendors] = useState([]);

  // Load vendors from Firestore on mount
  useEffect(() => {
    const fetchVendors = async () => {
      const querySnapshot = await getDocs(collection(db, "vendors"));
      const vendorData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(vendorData);
    };
    fetchVendors();
  }, []);

  // Save profile to Firestore
  const handleSaveProfile = async (profileData) => {
    const docRef = await addDoc(collection(db, "vendors"), profileData);
    setVendors([...vendors, { id: docRef.id, ...profileData }]);
  };

  return (
    <>
      <Header onSaveProfile={handleSaveProfile} />
      <MainBody vendors={vendors} />
    </>
  );
}
