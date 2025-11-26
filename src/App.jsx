import React, { useState, Suspense } from "react";
import Header from "./components/Header";

// Dynamic imports
const VendorList = React.lazy(() => import("./components/VendorList"));
const VendorCard = React.lazy(() => import("./components/VendorCard"));

export default function App() {
  const [vendors, setVendors] = useState([]);

  return (
    <>
      <Header onSaveProfile={(profile) => setVendors([...vendors, profile])} />
      <Suspense fallback={<div>Loading vendors...</div>}>
        <VendorList vendors={vendors} />
      </Suspense>
    </>
  );
}
