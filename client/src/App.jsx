import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('Waiting for server...');

  useEffect(() => {
    axios
      .get('http://localhost:8080/')
      .then((res) => setMsg(res.data))
      .catch(() => setMsg('Server connection failed.'));
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Termslify</h1>
      <p>
        Status: <strong>{msg}</strong>
      </p>
    </div>
  );
}
export default App;
