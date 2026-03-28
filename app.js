import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);



  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Docker + AWS App</h1>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <p className="message">{message}</p>
        )}

        <button onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
