import React from 'react';
import { Scale, Video, FileText, FileCheck, Users, Laptop } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import StatsCards from '../../components/StatsCards/StatsCards';
import TasksTable from '../../components/TasksTable/TasksTable';
import CalendarWidget from '../../components/CalendarWidget/CalendarWidget';
import RecentFiles from '../../components/RecentFiles/RecentFiles';
import dashboardData from '../../data/dashboardData.json';
import './dashboard.css';

const Dashboard = () => {
  const { usuario, estadisticas, tareasPendientes, reuniones, archivosRecientes, accionesRapidas } = dashboardData;

  const getIconComponent = (iconName) => {
    const icons = {
      'scale': Scale,
      'video': Video,
      'laptop': Laptop,
      'file-text': FileText,
      'file-check': FileCheck,
      'users': Users
    };
    return icons[iconName] || Scale;
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Header usuario={usuario} />

        {/* Welcome Banner */}
        <div className="dashboard-banner">
          <h1 className="dashboard-banner-title">¡Bienvenido de nuevo!</h1>
        </div>

        <div className="dashboard-content">
          {/* Quick Actions */}
          <div className="dashboard-actions">
            {accionesRapidas.map((accion) => {
              const IconComponent = getIconComponent(accion.icono);
              return (
                <button
                  key={accion.id}
                  className="dashboard-action-button"
                >
                  <div className={`dashboard-action-icon-wrapper ${accion.destacado ? 'primary' : 'secondary'}`}>
                    <IconComponent 
                      size={24}
                      className="dashboard-action-icon"
                    />
                  </div>
                  <span>{accion.texto}</span>
                </button>
              );
            })}
          </div>

          {/* GRID PRINCIPAL: 2 Columnas (2/3 izquierda + 1/3 derecha) */}
          <div className="dashboard-main-grid">
            
            {/* COLUMNA IZQUIERDA (2/3) */}
            <div className="dashboard-left-column">
              {/* Stats Cards (1/4 + 1/4 + 2/4) */}
              <div className="dashboard-stats-row">
                <StatsCards estadisticas={estadisticas} />
              </div>

              {/* Calendario y Archivos (en tablet van aquí) */}
              <div className="dashboard-right-column">
                <CalendarWidget reuniones={reuniones} />
                <RecentFiles archivos={archivosRecientes} />
              </div>

              {/* Tareas Pendientes */}
              <TasksTable tareas={tareasPendientes} />
            </div>

            {/* COLUMNA DERECHA (1/3) - Solo Desktop */}
            <div className="dashboard-right-column dashboard-right-column-desktop">
              <CalendarWidget reuniones={reuniones} />
              <RecentFiles archivos={archivosRecientes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
