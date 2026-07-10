// src/components/NavPanel.jsx
import React from 'react';

const NavPanel = () => {
  return (
    
      
        PS
        
          Your Name
          Frontend Developer
        
      

      
        Home
        About
        Projects
        Skills
        Contact
      

      
        © {new Date().getFullYear()} Your Name
      
    
  );
};

const styles = {
  panel: {
    borderRight: '1px solid rgba(255,255,255,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    background:
      'radial-gradient(circle at top left, #22254a 0, #0b1020 45%, #050712 100%)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  initials: {
    width: '40px',
    height: '40px',
    borderRadius: '999px',
    background: '#4f46e5',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    letterSpacing: '0.03em',
  },
  name: {
    fontWeight: 600,
    fontSize: '1rem',
  },
  title: {
    fontSize: '0.8rem',
    opacity: 0.7,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  link: {

export default NavPanel;