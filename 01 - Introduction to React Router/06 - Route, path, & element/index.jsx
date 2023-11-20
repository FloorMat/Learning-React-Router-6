import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

let styles = {
  backgroundColor: "black",
  width: "100px",
  height: "100px"
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div style={styles}></div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);