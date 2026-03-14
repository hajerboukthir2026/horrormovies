import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #ff3333',
      padding: '2rem',
      textAlign: 'center',
      color: '#aaa',
    }}>
      <h3 style={{ color: '#ff3333', letterSpacing: '3px', marginBottom: '0.5rem' }}>
         HORROR HUB
      </h3>
      <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
        Discover the scariest movies of all time
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#ff3333'}
          onMouseLeave={e => e.target.style.color = '#aaa'}>Home</a>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#ff3333'}
          onMouseLeave={e => e.target.style.color = '#aaa'}>Movies</a>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#ff3333'}
          onMouseLeave={e => e.target.style.color = '#aaa'}>Top Rated</a>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#ff3333'}
          onMouseLeave={e => e.target.style.color = '#aaa'}>Contact</a>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#555' }}>
        © 2024 Horror Hub. All rights reserved. 
      </p>
    </footer>
  );
}

export default Footer;