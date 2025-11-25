import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ padding: "1rem", minHeight: "200px", background: "#f0f0f0" }}>
        <h2>MainBody Placeholder</h2>
        <p>This area represents your vendor list or main content.</p>
      </main>
      <footer style={{ padding: "1rem", background: "#007bff", color: "#fff", textAlign: "center" }}>
        Footer Placeholder
      </footer>
    </div>
  );
}

// If using Vite's main.jsx entry
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
