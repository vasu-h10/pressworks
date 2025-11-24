import React from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

const vendors = [
  { id: 1, name: "Vendor A", description: "Best services" },
  { id: 2, name: "Vendor B", description: "High quality products" },
  { id: 3, name: "Vendor C", description: "Reliable and fast" },
];

function App() {
  return (
    <div className="app">
      <Header />
      <MainBody vendors={vendors} />
      <Footer /> {/* Footer is included here */}
    </div>
  );
}

export default App;