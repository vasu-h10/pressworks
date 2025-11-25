import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import VendorCard from "./VendorCard";
import "./VendorList.css";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "vendors"), snap => {
      setVendors(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  return (
    <div className="vendor-list">
      {vendors.map((v) => <VendorCard key={v.id} vendor={v} />)}
    </div>
  );
}
