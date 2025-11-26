// src/forms/ProfileForm.jsx
import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { db, storage } from "../firebase";
import "./ProfileForm.css";

export default function ProfileForm({ existing = null, onSaved }) {
  const [firstName, setFirstName] = useState(existing?.firstName ?? "");
  const [lastName, setLastName] = useState(existing?.lastName ?? "");
  const [restaurantName, setRestaurantName] = useState(existing?.restaurantName ?? "");
  const [restaurantLocation, setRestaurantLocation] = useState(existing?.restaurantLocation ?? "");
  const [email, setEmail] = useState(existing?.email ?? "");
  const [phone, setPhone] = useState(existing?.phone ?? "");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { setError(""); }, [email, phone, file]);

  const checkDuplicate = async () => {
    const vendorsRef = collection(db, "vendors");
    if (!email && !phone) return null;

    const qEmail = email ? query(vendorsRef, where("email", "==", email)) : null;
    const qPhone = phone ? query(vendorsRef, where("phone", "==", phone)) : null;

    if (qEmail) {
      const snap = await getDocs(qEmail);
      if (!snap.empty) return snap.docs[0];
    }
    if (qPhone) {
      const snap = await getDocs(qPhone);
      if (!snap.empty) return snap.docs[0];
    }
    return null;
  };

  const uploadProfileImage = async (vendorId, fileToUpload, previousPath = null) => {
    if (!fileToUpload) return { url: null, path: previousPath ?? null };

    const name = fileToUpload.name.replace(/\s+/g, "-");
    const ts = Date.now();
    const path = `vendors/${vendorId}/profile-${ts}-${name}`;
    const ref = storageRef(storage, path);
    await uploadBytes(ref, fileToUpload);
    const url = await getDownloadURL(ref);

    if (previousPath && previousPath !== path) {
      try { await deleteObject(storageRef(storage, previousPath)); }
      catch (err) { console.warn("Failed deleting previous image", err); }
    }

    return { url, path };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!firstName || !lastName || !restaurantName) {
        setError("Please fill name and restaurant name.");
        setLoading(false);
        return;
      }

      const vendorsRef = collection(db, "vendors");

      if (existing && existing.id) {
        const vendorDocRef = doc(db, "vendors", existing.id);
        if ((email && email !== existing.email) || (phone && phone !== existing.phone)) {
          const dup = await checkDuplicate();
          if (dup && dup.id !== existing.id) {
            setError("Email or phone already registered to another vendor.");
            setLoading(false);
            return;
          }
        }
        const uploaded = await uploadProfileImage(existing.id, file, existing.photoPath ?? null);
        const payload = {
          restaurantName,
          restaurantLocation,
          email,
          phone,
          updatedAt: serverTimestamp(),
        };
        if (uploaded.url) { payload.photoURL = uploaded.url; payload.photoPath = uploaded.path; }
        await updateDoc(vendorDocRef, payload);
        onSaved && onSaved({ id: existing.id, ...payload });
        setLoading(false);
        return;
      }

      // Creating new vendor
      const dup = await checkDuplicate();
      if (dup) {
        setError("Email or phone already registered. Use edit if this is you.");
        setLoading(false);
        return;
      }

      const newDocRef = await addDoc(vendorsRef, {
        firstName,
        lastName,
        restaurantName,
        restaurantLocation,
        email,
        phone,
        createdAt: serverTimestamp(),
      });

      const uploaded = await uploadProfileImage(newDocRef.id, file, null);
      if (uploaded.url) await updateDoc(newDocRef, { photoURL: uploaded.url, photoPath: uploaded.path });

      onSaved && onSaved({
        id: newDocRef.id,
        firstName,
        lastName,
        restaurantName,
        restaurantLocation,
        email,
        phone,
        photoURL: uploaded.url ?? null,
        photoPath: uploaded.path ?? null,
      });

      setFirstName(""); setLastName(""); setRestaurantName(""); setRestaurantLocation(""); setEmail(""); setPhone(""); setFile(null);
      setLoading(false);

    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to save vendor.");
      setLoading(false);
    }
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Vendor First Name" required />
      <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Vendor Last Name" required />
      <input value={restaurantName} onChange={e => setRestaurantName(e.target.value)} placeholder="Restaurant Name" required />
      <input value={restaurantLocation} onChange={e => setRestaurantLocation(e.target.value)} placeholder="Restaurant Location" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" />
      <label style={{ fontSize: "0.9rem" }}>Profile picture (1):
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] ?? null)} />
      </label>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" disabled={loading}>{loading ? "Saving..." : existing ? "Save changes" : "Create profile"}</button>
        <button type="button" onClick={() => {
          if (!existing) {
            setFirstName(""); setLastName(""); setRestaurantName(""); setRestaurantLocation(""); setEmail(""); setPhone(""); setFile(null); setError("");
          } else {
            setFirstName(existing.firstName ?? "");
            setLastName(existing.lastName ?? "");
            setRestaurantName(existing.restaurantName ?? "");
            setRestaurantLocation(existing.restaurantLocation ?? "");
            setEmail(existing.email ?? "");
            setPhone(existing.phone ?? "");
            setFile(null); setError("");
          }
        }}>Reset</button>
      </div>
    </form>
  );
}
