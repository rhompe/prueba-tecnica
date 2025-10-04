import React, { useState } from 'react';
import { Calendar, Search, Bell, Mail, ChevronDown, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ usuario }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-content">
        {/* MOBILE NAVBAR - Solo visible en móvil */}
        <div className="header-mobile">
          <div className="header-mobile-left">
            <img 
              src={`${process.env.PUBLIC_URL}/image/abogados.png`} 
              alt="Logo" 
              className="header-mobile-logo"
            />
          </div>
          
          <div className="header-mobile-right">
            <button className="header-mobile-icon">
              <Bell size={20} />
            </button>
            <button 
              className="header-mobile-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* DESKTOP HEADER - Oculto en móvil */}
        <div className="header-desktop">
          <div className="header-left">
            <div className="header-date">
              <Calendar size={16} />
              <span>Marzo 2022</span>
            </div>
            
            <div className="header-search">
              <Search size={16} className="header-search-icon" />
              <input
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>

          <div className="header-right">
            <Bell size={20} className="header-icon" />
            <Mail size={20} className="header-icon" />
            
            <div className="header-language">
              <span>{usuario.idioma}</span>
              <ChevronDown size={16} />
            </div>
            
            <div className="header-user">
              <span className="header-user-name">{usuario.nombre}</span>
              <div className="header-user-avatar"></div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      {menuOpen && (
        <div className="header-mobile-menu">
          <div className="header-mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
          <div className="header-mobile-menu-content">
            <div className="header-mobile-menu-header">
              <span>Menú</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="header-mobile-menu-nav">
              <a href="#dashboard">Dashboard</a>
              <a href="#casos">Gestión de Casos</a>
              <a href="#audiencias">Sala de Audiencias</a>
              <a href="#calendario">Calendario</a>
              <a href="#mensajes">Mensajes</a>
              <a href="#recursos">Recursos Legales</a>
              <a href="#configuracion">Configuración</a>
              <a href="#salir">Salir</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
