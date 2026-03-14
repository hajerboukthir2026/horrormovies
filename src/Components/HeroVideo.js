import React from 'react';

function HeroVideo() {
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
    }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src="https://www.youtube.com/embed/jHYhTERQ97s?autoplay=1&mute=1&loop=1&playlist=jHYhTERQ97s"
        title="Horror Hero Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.5)',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10,
      }}>
        <h1 style={{
          color: '#fff',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 10px rgba(255,0,0,0.8)',
          marginBottom: '1.5rem',
          letterSpacing: '3px',
        }}>
          WELCOME TO HORROR HUB 
        </h1>
        <p style={{
          color: '#ccc',
          fontSize: '1.2rem',
          marginBottom: '2rem',
        }}>
          Discover the scariest movies of all time
        </p>
        <button style={{
          backgroundColor: '#cc0000',
          color: '#fff',
          border: 'none',
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          borderRadius: '5px',
          cursor: 'pointer',
          letterSpacing: '2px',
          boxShadow: '0 0 20px rgba(255,0,0,0.5)',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => e.target.style.backgroundColor = '#ff0000'}
          onMouseLeave={e => e.target.style.backgroundColor = '#cc0000'}
        >
          EXPLORE NOW
        </button>
      </div>

    </div>
  );
}

export default HeroVideo;