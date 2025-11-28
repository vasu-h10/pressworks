import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import VendorCard from "./VendorCard";

export default function MainBody() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [vendorData, setVendorData] = useState(null); // Optional: store vendor info

  const handleRegistrationComplete = (data) => {
    setIsRegistered(true);
    setVendorData(data); // store form data if needed in VendorCard
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