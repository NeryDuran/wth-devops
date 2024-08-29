// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Obtiene el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const currentDay = new Date().getDay();

  // Define el horario para cada día
  const hours = [
    '9 a.m. - 8 p.m.',  // Domingo
    '10 a.m. - 4 p.m.', // Lunes
    '10 a.m. - 4 p.m.', // Martes
    '10 a.m. - 4 p.m.', // Miércoles
    '10 a.m. - 4 p.m.', // Jueves
    '10 a.m. - 4 p.m.', // Viernes
    '9 a.m. - 8 p.m.'   // Sábado
  ];

  return (
    <div>
      <h2>Horario de Atención</h2>
      <p>Hoy estamos abiertos de: {hours[currentDay]}</p>
    </div>
  );
};

export default Hours;
