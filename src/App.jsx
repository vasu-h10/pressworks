import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import VendorCard from "./VendorCard";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [vendorData, setVendorData] = useState(null);

  const handleRegistrationComplete = (data) => {
    setIsRegistered(true);
    setVendorData(data); // Pass user data to VendorCard
  };

  return (
    <div className="main-body p-4">
      {!isRegistered ? (
        <ProfileForm onComplete={handleRegistrationComplete} />
      ) : (
        <VendorCard vendor={vendorData} />
      )}
    </div>
  );
}