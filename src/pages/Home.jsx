import { Link } from 'react-router-dom';
import { artists } from '../data/folkMusic';
import ArtistImage from '../components/ArtistImage';

function Home() {
  const featuredArtists = artists.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Folk & Protest Music</h1>
          <p className="hero-subtitle">
            Explore the songs that shaped movements, challenged power, and gave voice to the voiceless
          </p>
          <div className="hero-actions">
            <Link to="/artists" className="btn btn-primary">Meet the Artists</Link>
            <Link to="/protest-music" className="btn btn-secondary">Explore History</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>What is Folk Music?</h2>
        <div className="intro-grid">
          <div className="intro-card">
            <h3>Music of the People</h3>
            <p>
              Folk music belongs to everyone. Passed down through generations, it tells the stories of
              ordinary people—their joys, struggles, work, and dreams. Unlike commercial music, folk
              music emerges from communities and belongs to them.
            </p>
          </div>
          <div className="intro-card">
            <h3>A Voice for Change</h3>
            <p>
              Protest music uses the power of song to challenge injustice. From labor songs to civil
              rights anthems, from anti-war ballads to environmental hymns, these songs have marched
              alongside every major social movement.
            </p>
          </div>
          <div className="intro-card">
            <h3>A Global Tradition</h3>
            <p>
              Every culture has its folk traditions. From the griots of West Africa to the troubadours
              of Europe, from Andean panpipes to Appalachian banjos, folk music connects us to our
              roots and to each other.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Featured Artists</h2>
        <div className="featured-artists">
          {featuredArtists.map(artist => (
            <Link to={`/artists/${artist.id}`} key={artist.id} className="featured-artist">
              <ArtistImage name={artist.name} src={artist.image} />
              <div className="featured-artist-info">
                <h3>{artist.name}</h3>
                <p>{artist.years}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/artists" className="btn btn-outline">View All Artists</Link>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"This land was made for you and me."</p>
          <cite>— Woody Guthrie</cite>
        </blockquote>
      </section>

      <section className="section">
        <h2>Explore</h2>
        <div className="explore-grid">
          <Link to="/world-music" className="explore-card">
            <div className="explore-icon">🌍</div>
            <h3>World Folk Music</h3>
            <p>Discover folk traditions from every corner of the globe</p>
          </Link>
          <Link to="/protest-music" className="explore-card">
            <div className="explore-icon">✊</div>
            <h3>Protest Music History</h3>
            <p>Learn how music powered social movements</p>
          </Link>
          <Link to="/artists" className="explore-card">
            <div className="explore-icon">🎸</div>
            <h3>Artist Profiles</h3>
            <p>Deep dives into legendary folk musicians</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
