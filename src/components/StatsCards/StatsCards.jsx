import React from 'react';
import { CircleCheck, Laptop, Armchair } from 'lucide-react';
import './StatsCards.css';

const StatsCards = ({ estadisticas }) => {
  return (
    <>
      {/* Card 1 - Casos */}
      <div className="stat-card">
        <div className="stat-card-icon">
          <CircleCheck size={32} color="#1e293b" />
        </div>
        <div className="stat-card-title">{estadisticas.totalCasos} Casos</div>
        <div className="stat-card-subtitle">{estadisticas.casosActivos}</div>
      </div>
      
      {/* Card 2 - Reuniones */}
      <div className="stat-card">
        <div className="stat-card-icon">
          <Laptop size={32} color="#1e293b" />
        </div>
        <div className="stat-card-title">{estadisticas.totalReuniones} reuniones</div>
        <div className="stat-card-subtitle">{estadisticas.reunionesHoy}</div>
      </div>
      
      {/* Card 3 - Próxima Reunión */}
      <div className="stat-card">
        <div className="stat-card-timer">
          Faltan
          <span className="stat-card-timer-value">
            {estadisticas.proximaReunion.tiempoRestante}
          </span>
          minutos
        </div>
        <div className="stat-card-icon">
          <Armchair size={32} color="#1e293b" />
        </div>
        <div className="stat-card-content">
          <div className="stat-card-info-wrapper">
            <div className="stat-card-info">{estadisticas.proximaReunion.nombre}</div>
            <div className="stat-card-code">{estadisticas.proximaReunion.codigo}</div>
          </div>
          <button className="stat-card-button">
            Unirme →
          </button>
        </div>
      </div>
    </>
  );
};

export default StatsCards;
