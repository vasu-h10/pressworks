import React, { useState, useEffect } from "react";
import "./Header.css";

import ProfileIcon from "../icons/profile-icon.svg";
import LogoIcon from "../icons/logo-icon.svg";
import DarkLightIcon from "../icons/darklight-icon.svg";
import DonateIcon from "../icons/DonateIcon.jsx";
import HeaderTitle from "../icons/HeaderTitle"; // <-- import animated title

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className={`header${darkMode ? " dark-mode" : ""}`}>
      {/* Profile Icon */}
      <div className="header-item">
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
      <div className="header-item donation-icon">
        <div className="donate-hand-coin">
          <DonateIcon className="donate-hand" />
        </div>
      </div>
    </header>
  );
}