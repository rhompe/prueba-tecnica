import React from 'react';
import { Calendar, Search, Bell, Mail, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = ({ usuario }) => {
  return (
    <div className="header">
      <div className="header-content">
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
  );
};

export default Header;
