import React from 'react';
import './TasksTable.css';

const TasksTable = ({ tareas }) => {
  return (
    <div className="tasks-table-container">
      <div className="tasks-table-header">
        <h2 className="tasks-table-title">Tareas pendientes</h2>
        <button className="tasks-table-view-all">
          Ver todos
          <span>→</span>
        </button>
      </div>
      
      <div className="tasks-table-scroll">
        <table className="tasks-table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre de la actividad</th>
              <th>Status</th>
              <th>Fecha límite</th>
              <th>Tiempo dedicado</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr key={tarea.id}>
                {/* Avatar vacío */}
                <td>
                  <div className="tasks-table-avatar"></div>
                </td>
                
                {/* Nombre de la actividad */}
                <td>
                  <div className="tasks-table-info">
                    <span className="tasks-table-label">Nombre de la actividad</span>
                    <span className="tasks-table-value">{tarea.nombre}</span>
                  </div>
                </td>
                
                {/* Status */}
                <td>
                  <div className="tasks-table-info">
                    <span className="tasks-table-label">Status</span>
                    <span className="tasks-table-status-value">{tarea.status}</span>
                  </div>
                </td>
                
                {/* Fecha límite */}
                <td>
                  <div className="tasks-table-info">
                    <span className="tasks-table-label">Fecha límite</span>
                    <span className="tasks-table-value">{tarea.fechaLimite}</span>
                  </div>
                </td>
                
                {/* Tiempo dedicado */}
                <td>
                  <div className="tasks-table-info">
                    <span className="tasks-table-label">Tiempo dedicado</span>
                    <span className="tasks-table-value">{tarea.tiempoDedicado}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksTable;
