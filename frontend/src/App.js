import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NowhereDigitalWebsite from "./components/NowhereDigitalWebsite";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NowhereDigitalWebsite />} />
        </Routes>
      </BrowserRouter>
      <div>
        <h1>Frontend</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;