import { useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/folkMusic';

function Artists() {
  const [filter, setFilter] = useState('all');

  const regions = {
    all: 'All Artists',
    usa: 'United States',
    international: 'International'
  };

  const filteredArtists = artists.filter(artist => {
    if (filter === 'all') return true;
    if (filter === 'usa') return artist.origin.includes('USA');
    if (filter === 'international') return !artist.origin.includes('USA');
    return true;
  });

  return (
    <div className="artists-page">
      <div className="page-header">
        <h1>Folk & Protest Artists</h1>
        <p>Meet the musicians who used their voices to change the world</p>
      </div>

      <div className="filter-bar">
        {Object.entries(regions).map(([key, label]) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="artists-grid">
        {filteredArtists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default Artists;
