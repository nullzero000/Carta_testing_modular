// src/App.jsx
import { useState } from 'react';
import HebrewKeyboard from './components/HebrewKeyboard';
import ZoharMonitor from './components/ZoharMonitor';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");

  // Funciones de Control
  const handleAdd = (char) => setInputText((prev) => prev + char);
  const handleSpace = () => setInputText((prev) => prev + " ");
  const handleBackspace = () => setInputText((prev) => prev.slice(0, -1));
  const handleClear = () => setInputText("");

  return (
    <div className="app-shell">
      <header>
        <h1>EJE-13 / SUPRAMENTE</h1>
        <p>Terminal Kabbalística</p>
      </header>

      <main className="main-layout">
        <section className="panel monitor-panel">
          <ZoharMonitor inputString={inputText} />
        </section>

        <section className="panel control-panel">
          <HebrewKeyboard 
            onAdd={handleAdd} 
            onSpace={handleSpace} 
            onBackspace={handleBackspace} 
            onClear={handleClear}
          />
        </section>
      </main>
    </div>
  );
}

export default App;