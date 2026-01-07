import { Link } from 'react-router-dom';
import ArtistImage from './ArtistImage';

function ArtistCard({ artist }) {
  return (
    <Link to={`/artists/${artist.id}`} className="artist-card">
      <div className="artist-card-image">
        <ArtistImage name={artist.name} src={artist.image} />
      </div>
      <div className="artist-card-content">
        <h3>{artist.name}</h3>
        <p className="artist-years">{artist.years}</p>
        <p className="artist-origin">{artist.origin}</p>
      </div>
    </Link>
  );
}

export default ArtistCard;
