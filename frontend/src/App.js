import React, { useEffect, useState } from 'react';
import API_URL from './config';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mon Portfolio</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;