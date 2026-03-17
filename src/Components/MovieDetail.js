import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moviesData from '../Data/Movies';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(m => m.id === parseInt(id));

  if (!movie) return <p style={{ color: '#fff', textAlign: 'center' }}>Film introuvable 😢</p>;

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', padding: '2rem' }}>
      
      {/* Bouton retour */}
      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#cc0000',
          color: '#fff',
          border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '2rem',
          fontSize: '1rem',
        }}
      >
        ← Retour
      </button>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Poster */}
        <img
          src={movie.posterURL}
          alt={movie.titre}
          style={{ width: '250px', borderRadius: '10px', boxShadow: '0 0 20px rgba(255,0,0,0.3)' }}
        />

        {/* Details */}
        <div style={{ maxWidth: '600px', color: '#fff' }}>
          <h1 style={{ color: '#ff3333', marginBottom: '1rem', letterSpacing: '2px' }}>
            {movie.titre}
          </h1>
          <span style={{
            backgroundColor: '#cc0000',
            color: '#fff',
            padding: '0.3rem 0.8rem',
            borderRadius: '20px',
            fontWeight: 'bold',
            marginBottom: '1rem',
            display: 'inline-block',
          }}>
            ⭐ {movie.note}/10
          </span>
          <p style={{ color: '#ccc', lineHeight: '1.8', margin: '1rem 0', fontSize: '1rem' }}>
            {movie.description}
          </p>

          {/* Trailer */}
          <h3 style={{ color: '#ff3333', marginBottom: '1rem' }}>🎬 Trailer</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}
              src={movie.trailer}
              title={movie.titre}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;