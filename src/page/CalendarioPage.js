import React from 'react';
import CalendarioReuniones from '../components/CalendarioReuniones';

const CalendarioPage = () => {
  return (
    <div style={{ 
      padding: '40px 20px', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <CalendarioReuniones />
    </div>
  );
};

export default CalendarioPage;
