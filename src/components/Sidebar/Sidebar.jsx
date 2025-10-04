import React from 'react';
import { Scale, Video, CalendarDays, SendHorizontal, BookOpen, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { id: 1, texto: 'Dashboard', icono: LayoutDashboard, activo: true },
    { id: 2, texto: 'Gestión de Casos', icono: Scale, activo: false },
    { id: 3, texto: 'Sala de Audiencias', icono: Video, activo: false },
    { id: 4, texto: 'Calendario', icono: CalendarDays, activo: false },
    { id: 5, texto: 'Mensajes', icono: SendHorizontal, activo: false },
    { id: 6, texto: 'Recursos Legales', icono: BookOpen, activo: false }
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-content">
          <img 
            src={`${process.env.PUBLIC_URL}/image/abogados.png`} 
            alt="Logo Abogados" 
            className="sidebar-logo-image"
          />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icono;
          return (
            <div
              key={item.id}
              className={`sidebar-menu-item ${item.activo ? 'active' : ''}`}
            >
              <IconComponent size={20} />
              <span>{item.texto}</span>
            </div>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <div className="sidebar-bottom">
        <div className="sidebar-menu-item">
          <Settings size={20} />
          <span>Configuración</span>
        </div>
        
        <div className="sidebar-menu-item">
          <LogOut size={20} />
          <span>Salir</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
