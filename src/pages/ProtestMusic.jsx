import { protestHistory } from '../data/folkMusic';

function ProtestMusic() {
  return (
    <div className="protest-music-page">
      <div className="page-header">
        <h1>{protestHistory.title}</h1>
        <p className="intro-text">{protestHistory.introduction}</p>
      </div>

      <div className="timeline">
        {protestHistory.movements.map((movement, index) => (
          <div key={movement.name} className="timeline-item">
            <div className="timeline-marker">{index + 1}</div>
            <div className="timeline-content">
              <h2>{movement.name}</h2>
              <p>{movement.description}</p>
              <div className="key-songs">
                <h4>Key Songs</h4>
                <ul>
                  {movement.keySongs.map(song => (
                    <li key={song}>{song}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="legacy-section">
        <h2>The Legacy Continues</h2>
        <p>{protestHistory.legacy}</p>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"A song is just like a movie with one frame."</p>
          <cite>— Phil Ochs</cite>
        </blockquote>
      </section>

      <section className="protest-themes">
        <h2>Recurring Themes in Protest Music</h2>
        <div className="themes-grid">
          <div className="theme-card">
            <h3>Workers' Rights</h3>
            <p>
              From "Solidarity Forever" to modern labor anthems, songs have built unity
              among workers fighting for fair wages and safe conditions.
            </p>
          </div>
          <div className="theme-card">
            <h3>Peace & Anti-War</h3>
            <p>
              Every major conflict has generated songs of opposition, from WWI to
              Vietnam to Iraq, asking why we send our children to die.
            </p>
          </div>
          <div className="theme-card">
            <h3>Civil & Human Rights</h3>
            <p>
              Music has accompanied every struggle for equality—for racial justice,
              LGBTQ+ rights, women's liberation, and indigenous sovereignty.
            </p>
          </div>
          <div className="theme-card">
            <h3>Environmental Justice</h3>
            <p>
              As climate crisis intensifies, musicians continue the tradition of
              speaking for those who cannot speak—the earth and future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProtestMusic;
