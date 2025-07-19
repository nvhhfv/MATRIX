import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NowhereDigitalWebsite from "./components/NowhereDigitalWebsite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NowhereDigitalWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;