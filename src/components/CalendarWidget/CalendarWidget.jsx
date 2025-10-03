import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './CalendarWidget.css';

const CalendarWidget = ({ reuniones }) => {
  // Obtener hora actual
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Actualizar cada minuto

    return () => clearInterval(timer);
  }, []);

  // Ordenar reuniones por hora
  const sortedReuniones = [...reuniones].sort((a, b) => {
    const timeA = a.hora.split(':').map(Number);
    const timeB = b.hora.split(':').map(Number);
    return (timeA[0] * 60 + timeA[1]) - (timeB[0] * 60 + timeB[1]);
  });

  // Determinar cuál es el PRÓXIMO evento (el siguiente después de la hora actual)
  const getNextEventIndex = () => {
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    // Buscar el primer evento que tenga título y que esté después de la hora actual
    for (let i = 0; i < sortedReuniones.length; i++) {
      if (!sortedReuniones[i].titulo) continue; // Saltar eventos sin título
      
      const eventTime = sortedReuniones[i].hora.split(':').map(Number);
      const eventTotalMinutes = eventTime[0] * 60 + eventTime[1];
      
      // Si el evento es después de ahora, ese es el próximo
      if (eventTotalMinutes > currentTotalMinutes) {
        return i;
      }
    }
    return -1; // No hay eventos futuros
  };

  const nextEventIndex = getNextEventIndex();
  const reunionesConTitulo = sortedReuniones.filter(r => r.titulo);

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h2 className="calendar-title">Calendario</h2>
        <button className="calendar-button">
          Hoy
          <ChevronDown size={12} />
        </button>
      </div>
      
      <div className="calendar-content">
        <div className="calendar-count">{reunionesConTitulo.length} Reuniones</div>
        
        <div className="calendar-events-list">
          {sortedReuniones.map((reunion, index) => {
            // Solo mostrar si tiene título o si es un slot vacío importante
            if (!reunion.titulo) {
              return null; // No mostrar horas vacías
            }

            return (
              <div key={reunion.id} className="calendar-event-item">
                <div className="calendar-event-time">{reunion.hora}</div>
                
                <div className={`calendar-event-content ${index === nextEventIndex ? 'active' : ''}`}>
                  <div className="calendar-event-title">{reunion.titulo}</div>
                  {reunion.caso && (
                    <div className="calendar-event-case">Caso "{reunion.caso}"</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
