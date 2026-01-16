import React from "react";
import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm animate__animated animate__fadeInDown">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Hello World App</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-center py-3 mt-auto shadow-sm animate__animated animate__fadeInUp">
      <div className="container">
        <span className="text-muted">&copy; {new Date().getFullYear()} Hello World App. All rights reserved.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center bg-light">
        <div className="card shadow-lg p-5 animate__animated animate__fadeInDown" style={{maxWidth: 400}}>
          <h1 className="display-4 text-center mb-3">Hello World</h1>
          <p className="lead text-center text-secondary">Welcome to your first React app!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
