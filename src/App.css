// src/components/ZoharMonitor.jsx
import React from 'react';
import { HEBREW_DATA } from '../data/constants';

const ZoharMonitor = ({ inputString }) => {
  const characters = inputString.split('');

  return (
    <div className="monitor-container">
      <h2 className="monitor-header">MONITOR DE RESONANCIA (ZOHAR)</h2>
      
      {/* Visualización de Tarjetas (CSS maneja el RTL) */}
      <div className="display-area">
        {characters.length === 0 ? (
          <span style={{ width: '100%', textAlign: 'center', opacity: 0.5, direction: 'ltr' }}>
            Esperando pulsos...
          </span>
        ) : (
          characters.map((char, index) => {
            const data = HEBREW_DATA[char];
            const bgColor = data ? data.color : 'transparent';
            
            // Construcción de la Ficha Técnica (Tooltip)
            const tooltipInfo = data 
              ? `Letra: ${data.name} (${data.val})\n` +
                `Tipo: ${data.type}\n` +
                `Sefirá: ${data.sefira}\n` +
                `Regente: ${data.planet}\n` +
                `Elemento: ${data.element}\n\n` +
                `>> ${data.energy}`
              : 'Carácter desconocido';

            return (
              <div 
                key={index} 
                className="char-card" 
                title={tooltipInfo}
              >
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

      {/* Buffer de Texto Crudo */}
      <div className="raw-text">
        {inputString || "..."}
      </div>
    </div>
  );
};

export default ZoharMonitor;