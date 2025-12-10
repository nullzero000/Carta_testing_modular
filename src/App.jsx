import { useState } from 'react';
import HebrewKeyboard from './components/HebrewKeyboard';
import ZoharMonitor from './components/ZoharMonitor';
import './App.css';

function App() {
  // Estado único de verdad: la cadena de texto
  const [inputText, setInputText] = useState("");

  // Manejadores de eventos (Lógica de control)
  const handleAdd = (char) => setInputText((prev) => prev + char);
  const handleSpace = () => setInputText((prev) => prev + " ");
  const handleBackspace = () => setInputText((prev) => prev.slice(0, -1));
  const handleClear = () => setInputText("");

  return (
    <div className="app-shell">
      <header>
        <h1>TERMINAL EJE-13</h1>
        <p>Sistema de Análisis Fractal</p>
      </header>

      <main className="main-layout">
        {/* Módulo Izquierdo: Visualización */}
        <section className="panel monitor-panel">
          <ZoharMonitor inputString={inputText} />
        </section>

        {/* Módulo Derecho: Control */}
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