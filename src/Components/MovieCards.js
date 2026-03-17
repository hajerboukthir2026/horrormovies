import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ id, titre, description, posterURL, note }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      style={{
        width: '220px',
        backgroundColor: '#1a1a1a',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(255,0,0,0.2)',
        transition: 'transform 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={posterURL}
        alt={titre}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ color: '#ff3333', margin: '0 0 0.5rem', fontSize: '1rem' }}>{titre}</h3>
        <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{description}</p>
        <span style={{
          backgroundColor: '#cc0000',
          color: '#fff',
          padding: '0.3rem 0.7rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
        }}>
          ⭐ {note}/10
        </span>
      </div>
    </div>
  );
}

export default MovieCard;