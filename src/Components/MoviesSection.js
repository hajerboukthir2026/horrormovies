import React, { useState } from 'react';
import MovieCard from './MovieCards';
import moviesData from '../Data/Movies';

function MoviesSection() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState('');
  const [minNote, setMinNote] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    titre: '', description: '', posterURL: '', note: '',
  });

  const filtered = movies.filter(m =>
    m.titre.toLowerCase().includes(search.toLowerCase()) &&
    parseFloat(m.note) >= parseFloat(minNote || 0)
  );

  const handleAdd = () => {
    if (!newMovie.titre || !newMovie.note) return;
    setMovies([...movies, { ...newMovie, id: Date.now(), note: parseFloat(newMovie.note) }]);
    setNewMovie({ titre: '', description: '', posterURL: '', note: '' });
    setShowForm(false);
  };

  const inputStyle = {
    padding: '0.6rem 1rem',
    borderRadius: '5px',
    border: '1px solid #ff3333',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontSize: '0.9rem',
    width: '100%',
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', padding: '3rem 2rem' }}>
      <h2 style={{
        color: '#ff3333', textAlign: 'center',
        fontSize: '2rem', marginBottom: '2rem', letterSpacing: '3px',
      }}>
         HORROR MOVIES
      </h2>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder=" Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ ...inputStyle, width: '250px' }}
        />
        <input
          type="number"
          placeholder=" Min note (0-10)"
          value={minNote}
          min="0" max="10"
          onChange={e => setMinNote(e.target.value)}
          style={{ ...inputStyle, width: '180px' }}
        />
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            backgroundColor: '#cc0000', color: '#fff',
            border: 'none', padding: '0.6rem 1.5rem',
            borderRadius: '5px', cursor: 'pointer',
            fontWeight: 'bold', fontSize: '0.9rem',
          }}
        >
          {showForm ? '✕ Annuler' : '＋ Ajouter Film'}
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div style={{
          backgroundColor: '#1a1a1a', padding: '1.5rem',
          borderRadius: '10px', maxWidth: '500px',
          margin: '0 auto 2rem', border: '1px solid #ff3333',
          display: 'flex', flexDirection: 'column', gap: '0.8rem',
        }}>
          <h3 style={{ color: '#ff3333', margin: 0 }}> Nouveau Film</h3>
          <input
            placeholder="Titre *"
            value={newMovie.titre}
            onChange={e => setNewMovie({ ...newMovie, titre: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="Description"
            value={newMovie.description}
            onChange={e => setNewMovie({ ...newMovie, description: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="URL Poster"
            value={newMovie.posterURL}
            onChange={e => setNewMovie({ ...newMovie, posterURL: e.target.value })}
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Note (0-10) *"
            value={newMovie.note}
            min="0" max="10"
            onChange={e => setNewMovie({ ...newMovie, note: e.target.value })}
            style={inputStyle}
          />
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: '#cc0000', color: '#fff',
              border: 'none', padding: '0.8rem',
              borderRadius: '5px', cursor: 'pointer',
              fontWeight: 'bold', fontSize: '1rem',
            }}
          >
             Confirmer
          </button>
        </div>
      )}

      {/* Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {filtered.length > 0
          ? filtered.map(movie => <MovieCard key={movie.id} {...movie} />)
          : <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Aucun film trouvé 😢</p>
        }
      </div>
    </div>
  );
}

export default MoviesSection;