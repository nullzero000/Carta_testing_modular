// src/data/constants.js

export const HEBREW_DATA = {
  // --- LAS TRES MADRES (Elementos Primordiales) ---
  'א': { 
    val: 1, 
    color: 'rgb(240, 248, 255)', // Blanco/Aire
    name: 'Aleph',
    type: 'Madre',
    element: 'Aire (Ruach)',
    planet: 'Urano (Raíz)',
    sefira: 'Keter (Corona)',
    energy: 'Paradoja Divina. Silencio que contiene todo el sonido. Unidad.'
  },
  'מ': { 
    val: 40, 
    color: 'rgb(0, 0, 205)', // Azul Profundo/Agua
    name: 'Mem',
    type: 'Madre',
    element: 'Agua (Mayim)',
    planet: 'Neptuno (Raíz)',
    sefira: 'Chesed (Misericordia)',
    energy: 'Matriz Gestante. El frío que une. Revelación de lo oculto.'
  },
  'ש': { 
    val: 300, 
    color: 'rgb(220, 20, 60)', // Rojo Fuego
    name: 'Shin',
    type: 'Madre',
    element: 'Fuego (Esh)',
    planet: 'Plutón (Raíz)',
    sefira: 'Gevurah (Juicio/Rigor)',
    energy: 'Transformación radical. Romper estructuras. Movimiento ascendente.'
  },

  // --- LAS SIETE DOBLES (Planetas / Sefirot / Puertas) ---
  // Según Sefer Yetzirah (Versión GRA/Ari)
  'ב': { 
    val: 2, 
    color: 'rgb(255, 255, 240)', // Plata/Blanco Luna
    name: 'Bet',
    type: 'Doble',
    element: 'Tierra (Base)',
    planet: 'Luna (Levanah)',
    sefira: 'Chokhmah (Sabiduría)',
    energy: 'La Casa/Vasija. Bendición y creación. El principio de la dualidad.'
  },
  'ג': { 
    val: 3, 
    color: 'rgb(255, 140, 0)', // Naranja/Marte
    name: 'Gimel',
    type: 'Doble',
    element: 'Fuego (Impulso)',
    planet: 'Marte (Maadim)',
    sefira: 'Gevurah (Rigor)',
    energy: 'El dador generoso (Gomil). Movimiento hacia afuera. Riqueza.'
  },
  'ד': { 
    val: 4, 
    color: 'rgb(255, 215, 0)', // Oro/Sol
    name: 'Dalet',
    type: 'Doble',
    element: 'Fuego (Núcleo)',
    planet: 'Sol (Chamah)',
    sefira: 'Tiferet (Belleza)',
    energy: 'La Puerta (Delet). Anulación del ego. Recibir para compartir.'
  },
  'כ': { 
    val: 20, 
    color: 'rgb(0, 128, 0)', // Verde/Venus
    name: 'Kaf',
    type: 'Doble',
    element: 'Tierra (Forma)',
    planet: 'Venus (Noga)',
    sefira: 'Netzach (Victoria)',
    energy: 'La Palma (Kaf). Potencial de materialización. Moldear la realidad.'
  },
  'פ': { 
    val: 80, 
    color: 'rgb(148, 0, 211)', // Violeta/Mercurio
    name: 'Pei',
    type: 'Doble',
    element: 'Aire (Comunicación)',
    planet: 'Mercurio (Kochav)',
    sefira: 'Hod (Esplendor)',
    energy: 'La Boca. El poder del habla. Apertura y revelación.'
  },
  'ר': { 
    val: 200, 
    color: 'rgb(105, 105, 105)', // Gris/Saturno
    name: 'Resh',
    type: 'Doble',
    element: 'Tierra (Estructura)',
    planet: 'Saturno (Shabbtai)',
    sefira: 'Yesod (Fundamento)',
    energy: 'Cabeza (Rosh). Liderazgo o pobreza mental. Rectificación del ego.'
  },
  'ת': { 
    val: 400, 
    color: 'rgb(75, 0, 130)', // Indigo/Jupiter
    name: 'Tav',
    type: 'Doble',
    element: 'Tierra (Final)',
    planet: 'Júpiter (Tzedek)',
    sefira: 'Malchut (Reino)',
    energy: 'El Sello. Verdad absoluta (Emet). Finalización de ciclos.'
  },

  // --- LAS DOCE SIMPLES (Zodiaco / Constelaciones) ---
  'ה': { 
    val: 5, 
    color: 'rgb(255, 69, 0)', // Rojo Naranja
    name: 'Hei',
    type: 'Simple',
    element: 'Fuego',
    planet: 'Aries (Taleh)',
    sefira: 'Malchut (Expresión)',
    energy: 'Aliento de vida. El pensamiento se hace palabra. Renovación.'
  },
  'ו': { 
    val: 6, 
    color: 'rgb(139, 69, 19)', // Marrón/Tierra
    name: 'Vav',
    type: 'Simple',
    element: 'Tierra',
    planet: 'Tauro (Shor)',
    sefira: 'Yesod (Conexión)',
    energy: 'El gancho conector. Columna vertebral. Verdad y continuidad.'
  },
  'ז': { 
    val: 7, 
    color: 'rgb(255, 255, 0)', // Amarillo Aire
    name: 'Zayin',
    type: 'Simple',
    element: 'Aire',
    planet: 'Géminis (Teomim)',
    sefira: 'Hod (Movimiento)',
    energy: 'La Espada y la Corona. Discernimiento. Movimiento ágil.'
  },
  'ח': { 
    val: 8, 
    color: 'rgb(0, 191, 255)', // Azul Claro
    name: 'Chet',
    type: 'Simple',
    element: 'Agua',
    planet: 'Cáncer (Sartan)',
    sefira: 'Binah (Refugio)',
    energy: 'Vida (Chai). Trascender los límites naturales. Protección.'
  },
  'ט': { 
    val: 9, 
    color: 'rgb(255, 165, 0)', // Naranja Fuego
    name: 'Tet',
    type: 'Simple',
    element: 'Fuego',
    planet: 'Leo (Aryeh)',
    sefira: 'Chesed (Fuerza Vital)',
    energy: 'La Serpiente/Útero. Bondad oculta. Inversión de energía.'
  },
  'י': { 
    val: 10, 
    color: 'rgb(85, 107, 47)', // Verde Oliva
    name: 'Yod',
    type: 'Simple',
    element: 'Tierra',
    planet: 'Virgo (Betulah)',
    sefira: 'Malchut (Punto)',
    energy: 'El punto primordial. Humildad absoluta. Semilla de todo.'
  },
  'ל': { 
    val: 30, 
    color: 'rgb(173, 216, 230)', // Celeste Aire
    name: 'Lamed',
    type: 'Simple',
    element: 'Aire',
    planet: 'Libra (Moznaim)',
    sefira: 'Tiferet (Balance)',
    energy: 'El aguijón que enseña. Aspiración a elevarse. Equilibrio.'
  },
  'נ': { 
    val: 50, 
    color: 'rgb(0, 128, 128)', // Teal Agua
    name: 'Nun',
    type: 'Simple',
    element: 'Agua',
    planet: 'Escorpio (Akrav)',
    sefira: 'Netzach (Perseverancia)',
    energy: 'Caída y Redención. El pez en el abismo. Fidelidad.'
  },
  'ס': { 
    val: 60, 
    color: 'rgb(250, 128, 114)', // Salmon Fuego
    name: 'Samekh',
    type: 'Simple',
    element: 'Fuego',
    planet: 'Sagitario (Kashat)',
    sefira: 'Tiferet (Círculo)',
    energy: 'Apoyo infinito. El círculo protector. Confianza plena.'
  },
  'ע': { 
    val: 70, 
    color: 'rgb(47, 79, 79)', // Pizarra Tierra
    name: 'Ayin',
    type: 'Simple',
    element: 'Tierra',
    planet: 'Capricornio (Gedi)',
    sefira: 'Hod (Visión)',
    energy: 'El Ojo. Percepción de la realidad. Ver la esencia.'
  },
  'צ': { 
    val: 90, 
    color: 'rgb(224, 255, 255)', // Cyan Aire
    name: 'Tzadik',
    type: 'Simple',
    element: 'Aire',
    planet: 'Acuario (Deli)',
    sefira: 'Yesod (Fundamento)',
    energy: 'El Justo. Conexión cielo-tierra. Rectitud moral.'
  },
  'ק': { 
    val: 100, 
    color: 'rgb(70, 130, 180)', // Azul Acero Agua
    name: 'Kof',
    type: 'Simple',
    element: 'Agua',
    planet: 'Piscis (Dagim)',
    sefira: 'Malchut (Santidad)',
    energy: 'Santidad en lo bajo. Imitación de lo divino. Sacar chispas.'
  }
};

export const KEYBOARD_LAYOUT = [
  "אבגדהוזחטי",
  "כלמנסעפצקר",
  "שת"
];