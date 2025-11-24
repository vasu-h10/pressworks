import React, { useState, useEffect } from "react";
import "./Header.css";
import ProfileForm from "../forms/ProfileForm.jsx";
import DonationPanel from "../forms/DonationPanel.jsx";

export default function Header({ onSaveProfile }) {
  const [darkMode, setDarkMode] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleForm = (form) => setActiveForm(activeForm === form ? null : form);

  return (
    <>
      <header className={`header${darkMode ? " dark-mode" : ""}`}>
        <div className="header-item" onClick={() => toggleForm("profile")}>Profile</div>
        <div className="header-item">Logo</div>
        <div className="header-item toggle-icon" onClick={toggleTheme}>Dark/Light</div>
        <div className="header-item donation-icon" onClick={() => toggleForm("donation")}>Donate</div>
      </header>

      {activeForm === "profile" && (
        <div className="form-overlay profile-form-overlay">
          <ProfileForm
            onSave={(profileData) => {
              if (onSaveProfile) onSaveProfile(profileData);
              setActiveForm(null);
            }}
          />
          <button className="close-form-btn" onClick={() => setActiveForm(null)}>✕</button>
        </div>
      )}

      {activeForm === "donation" && (
        <div className="form-overlay donation-form-overlay">
          <DonationPanel onClose={() => setActiveForm(null)} />
          <button className="close-form-btn" onClick={() => setActiveForm(null)}>✕</button>
        </div>
      )}
    </>
  );
}
