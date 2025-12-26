import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText) return alert('Please paste some text first!');

    setIsLoading(true);
    setSummary(''); // Clear previous summary

    try {
      // Note: We are using port 3001 now!
      const response = await axios.post('http://localhost:3001/api/summarize', {
        text: inputText,
      });
      setSummary(response.data.summary);
    } catch (err) {
      console.error(err);
      setSummary(
        '❌ Error: Could not reach the AI brain. Make sure the server is running on port 3001.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '40px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#007bff' }}>Termslify 📜⚡</h1>
      <p>
        Paste the long Terms and Conditions below to get a breakdown of the
        risks.
      </p>

      <textarea
        style={{
          width: '100%',
          height: '250px',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
        placeholder="Paste legal text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        onClick={handleSummarize}
        disabled={isLoading || !inputText}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: isLoading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isLoading ? 'AI is analyzing...' : 'Summarize & Find Risks'}
      </button>

      {summary && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            borderLeft: '5px solid #007bff',
            whiteSpace: 'pre-wrap', // This keeps the AI's formatting (bullet points)
          }}
        >
          <h2>AI Analysis:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
