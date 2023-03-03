import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  let messege = 'Bye there!';
  if (Math.random() > 0.5) {
    messege = 'Hello there!';
  }


  return <h1>{messege}</h1>
}

root.render(<App />);
