import React, { useState, useEffect } from "react";
import "./Header.css";

import ProfileIcon from "../icons/profile-icon.svg";
import LogoIcon from "../icons/logo-icon.svg";
import DarkLightIcon from "../icons/darklight-icon.svg";
import DonateIcon from "../icons/DonateIcon.jsx";
import HeaderTitle from "../icons/HeaderTitle"; // animated title

// Import forms
import ProfileForm from "../forms/ProfileForm.jsx";
import DonationPanel from "../forms/DonationPanel.jsx";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // "profile" or "donation"

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleForm = (form) =>
    setActiveForm(activeForm === form ? null : form);

  return (
    <>
      <header className={`header${darkMode ? " dark-mode" : ""}`}>
        {/* Profile Icon */}
        <div
          className="header-item"
          onClick={() => toggleForm("profile")}
        >
          <img src={ProfileIcon} alt="Profile Icon" className="icon" />
        </div>

        {/* Logo Icon */}
        <div className="header-item">
          <img src={LogoIcon} alt="Logo Icon" className="icon" />
        </div>

        {/* Animated Title in Center */}
        <div className="header-item">
          <HeaderTitle />
        </div>

        {/* Dark/Light Toggle */}
        <div className="header-item toggle-icon" onClick={toggleTheme}>
          <img src={DarkLightIcon} alt="Dark/Light Toggle" className="icon" />
        </div>

        {/* Donation Icon */}
        <div
          className="header-item donation-icon"
          onClick={() => toggleForm("donation")}
        >
          <div className="donate-hand-coin">
            <DonateIcon className="donate-hand" />
          </div>
        </div>
      </header>

      {/* Forms */}
      {activeForm === "profile" && (
        <div className="form-overlay profile-form-overlay">
          <ProfileForm />
          <button
            className="close-form-btn"
            onClick={() => setActiveForm(null)}
          >
            ✕
          </button>
        </div>
      )}

      {activeForm === "donation" && (
        <div className="form-overlay donation-form-overlay">
          <DonationPanel />
          <button
            className="close-form-btn"
            onClick={() => setActiveForm(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}