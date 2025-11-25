import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import VendorCard from "./VendorCard.jsx";
import "./VendorList.css";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const querySnapshot = await getDocs(collection(db, "vendors"));
      const data = [];
      querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setVendors(data);
    };
    fetchVendors();
  }, []);

  return (
    <div className="vendor-list">
      {vendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}
    </div>
  );
}
