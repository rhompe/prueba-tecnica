import React from 'react';
import { Download, Eye } from 'lucide-react';
import './RecentFiles.css';

const RecentFiles = ({ archivos }) => {
  // Función para obtener el icono según el tipo de archivo
  const getFileIcon = (tipo) => {
    const iconos = {
      'word': { bg: 'word', letra: 'W' },
      'pdf': { bg: 'pdf', letra: 'PDF' },
      'excel': { bg: 'excel', letra: 'XLS' },
      'powerpoint': { bg: 'powerpoint', letra: 'PPT' },
      'default': { bg: 'default', letra: '📄' }
    };
    
    return iconos[tipo] || iconos['default'];
  };

  return (
    <div className="recent-files">
      <div className="recent-files-header">
        <h2 className="recent-files-title">Archivos recientes</h2>
        <button className="recent-files-view-all">Ver todos →</button>
      </div>
      
      <div className="recent-files-content">
        {archivos.map((archivo) => {
          const icono = getFileIcon(archivo.tipo);
          
          return (
            <div key={archivo.id} className="recent-file-item">
              <div className={`recent-file-icon ${icono.bg}`}>
                <span className="recent-file-icon-letter">{icono.letra}</span>
              </div>
              
              <div className="recent-file-info">
                <div className="recent-file-name">{archivo.nombre}</div>
                <div className="recent-file-details">
                  {archivo.tamano} {archivo.fecha}
                </div>
              </div>
              
              <div className="recent-file-actions">
                <button className="recent-file-action">
                  <Download size={16} color="#4b5563" />
                </button>
                <button className="recent-file-action">
                  <Eye size={16} color="#4b5563" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentFiles;
