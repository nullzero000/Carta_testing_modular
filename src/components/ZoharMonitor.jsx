import React from 'react';
import { HEBREW_DATA } from '../data/constants';

const ZoharMonitor = ({ inputString }) => {
  // Convertimos el string en un array para procesar letra por letra
  const characters = inputString.split('');

  return (
    <div className="monitor-container">
      <h2>Monitor de Resonancia</h2>
      
      {/* Visualización de Texto como Bloques de Energía */}
      <div className="display-area">
        {characters.length === 0 ? (
          <span className="placeholder">Esperando coordenadas...</span>
        ) : (
          characters.map((char, index) => {
            // Buscamos datos, si es espacio o desconocido usamos gris
            const data = HEBREW_DATA[char];
            const bgColor = data ? data.color : 'transparent';
            const border = data ? data.color : '#ccc';
            
            return (
              <div key={index} className="char-card" style={{ borderColor: border }}>
                <div 
                  className="char-aura" 
                  style={{ backgroundColor: bgColor, opacity: 0.3 }}
                ></div>
                <span className="char-symbol">{char}</span>
                {data && <span className="char-val">{data.val}</span>}
              </div>
            );
          })
        )}
      </div>

      <div className="raw-text">
        <strong>Buffer:</strong> {inputString}
      </div>
    </div>
  );
};

export default ZoharMonitor;