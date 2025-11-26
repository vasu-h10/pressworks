import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import VendorCard from "./VendorCard";

import "./VendorList.css";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "vendors");
    const unsubscribe = onSnapshot(colRef, snapshot => {
      const vendorData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(vendorData);
    });

    return () => unsubscribe();
  }, []);

  if (!vendors.length) return <p>No vendors yet.</p>;

  return (
    <div className="vendor-list">
      {vendors.map(vendor => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
