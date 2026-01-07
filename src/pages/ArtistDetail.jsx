import { useParams, Link } from 'react-router-dom';
import { artists } from '../data/folkMusic';
import ArtistImage from '../components/ArtistImage';

function ArtistDetail() {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="not-found">
        <h1>Artist Not Found</h1>
        <Link to="/artists" className="btn btn-primary">Back to Artists</Link>
      </div>
    );
  }

  return (
    <div className="artist-detail">
      <Link to="/artists" className="back-link">← Back to Artists</Link>

      <div className="artist-header">
        <div className="artist-image-large">
          <ArtistImage name={artist.name} src={artist.image} />
        </div>
        <div className="artist-intro">
          <h1>{artist.name}</h1>
          <p className="artist-meta">{artist.years} • {artist.origin}</p>
          <div className="artist-themes">
            {artist.themes.map(theme => (
              <span key={theme} className="theme-tag">{theme}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="artist-content">
        <section className="content-section">
          <h2>Biography</h2>
          <p>{artist.bio}</p>
        </section>

        <section className="content-section">
          <h2>Significance</h2>
          <p>{artist.significance}</p>
        </section>

        <section className="content-section">
          <h2>Notable Songs</h2>
          <ul className="songs-list">
            {artist.notableSongs.map(song => (
              <li key={song}>{song}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="artist-nav">
        {artists.map((a, i) => {
          if (a.id === artist.id) {
            const prev = artists[i - 1];
            const next = artists[i + 1];
            return (
              <div key={a.id} className="nav-links">
                {prev && (
                  <Link to={`/artists/${prev.id}`} className="nav-prev">
                    ← {prev.name}
                  </Link>
                )}
                {next && (
                  <Link to={`/artists/${next.id}`} className="nav-next">
                    {next.name} →
                  </Link>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ArtistDetail;
