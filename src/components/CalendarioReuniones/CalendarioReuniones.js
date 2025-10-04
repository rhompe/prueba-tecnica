import React, { useState, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarioReuniones.css';
import eventosData from '../../data/eventos.json';

moment.locale('es');
const localizer = momentLocalizer(moment);

const CalendarioReuniones = () => {
  const [view, setView] = useState('day');
  const [date, setDate] = useState(new Date());

  const eventos = useMemo(() => {
    return eventosData.eventos.map(evento => ({
      id: evento.id,
      title: evento.titulo,
      start: new Date(evento.inicio),
      end: new Date(evento.fin),
      color: evento.color
    }));
  }, []);

  const horaActual = new Date();

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.color || '#E8E8E8',
      borderRadius: '8px',
      border: '1px solid #D0D0D0',
      color: '#333',
      padding: '8px',
      fontSize: '14px',
      fontWeight: '500'
    };
    return { style };
  };

  const formats = {
    timeGutterFormat: 'HH:mm',
    eventTimeRangeFormat: () => '',
    agendaTimeRangeFormat: () => '',
  };

  const messages = {
    today: 'Hoy',
    previous: 'Anterior',
    next: 'Siguiente',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    showMore: (total) => `+ Ver más (${total})`
  };

  const reunionesDelDia = eventos.filter(evento => {
    const eventoDate = moment(evento.start);
    const selectedDate = moment(date);
    return eventoDate.isSame(selectedDate, 'day');
  }).length;

  const irAHoy = () => {
    setDate(new Date());
  };

  const calcularPosicionHoraActual = () => {
    const horaInicio = 16;
    const horaFin = 21;
    const horasTotales = horaFin - horaInicio;
    
    const horaActualHoras = horaActual.getHours();
    const horaActualMinutos = horaActual.getMinutes();
    
    if (horaActualHoras < horaInicio || horaActualHoras >= horaFin) {
      return -100;
    }
    
    const minutosDesdeInicio = (horaActualHoras - horaInicio) * 60 + horaActualMinutos;
    const minutosTotal = horasTotales * 60;
    const porcentaje = (minutosDesdeInicio / minutosTotal) * 100;
    
    return porcentaje;
  };

  const posicionHoraActual = calcularPosicionHoraActual();
  const mostrarLineaActual = posicionHoraActual >= 0 && posicionHoraActual <= 100;

  return (
    <div className="calendario-container">
      <div className="calendario-header">
        <div className="calendario-titulo">
          <h2>Calendario</h2>
          <p className="reuniones-count">{reunionesDelDia} Reuniones</p>
        </div>
        <div className="calendario-controles">
          <button className="btn-hoy" onClick={irAHoy}>
            Hoy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="calendario-wrapper">
        <Calendar
          localizer={localizer}
          events={eventos}
          view={view}
          date={date}
          onView={setView}
          onNavigate={setDate}
          style={{ height: 600 }}
          eventPropGetter={eventStyleGetter}
          formats={formats}
          messages={messages}
          min={new Date(2025, 0, 1, 16, 0, 0)}
          max={new Date(2025, 0, 1, 21, 0, 0)}
          step={30}
          timeslots={1}
          toolbar={false}
          views={['day']}
        />
        
        {mostrarLineaActual && (
          <div 
            className="current-time-indicator" 
            style={{ top: `${posicionHoraActual}%` }}
          >
            <div className="current-time-label">
              {moment(horaActual).format('HH:mm')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarioReuniones;
