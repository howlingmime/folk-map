import { useState } from 'react';
import { worldRegions } from '../data/folkMusic';

function WorldMusic() {
  const [activeRegion, setActiveRegion] = useState(worldRegions[0].id);

  const currentRegion = worldRegions.find(r => r.id === activeRegion);

  return (
    <div className="world-music-page">
      <div className="page-header">
        <h1>Folk Music Around the World</h1>
        <p>Explore the rich tapestry of folk traditions from every continent</p>
      </div>

      <div className="region-tabs">
        {worldRegions.map(region => (
          <button
            key={region.id}
            className={`region-tab ${activeRegion === region.id ? 'active' : ''}`}
            onClick={() => setActiveRegion(region.id)}
          >
            {region.name}
          </button>
        ))}
      </div>

      {currentRegion && (
        <div className="region-content">
          <div className="region-intro">
            <h2>{currentRegion.name}</h2>
            <p>{currentRegion.description}</p>
          </div>

          <div className="traditions-grid">
            {currentRegion.traditions.map(tradition => (
              <div key={tradition.name} className="tradition-card">
                <h3>{tradition.name}</h3>
                <p>{tradition.description}</p>
                <div className="instruments">
                  <h4>Key Instruments</h4>
                  <div className="instrument-tags">
                    {tradition.instruments.map(instrument => (
                      <span key={instrument} className="instrument-tag">
                        {instrument}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="section world-music-cta">
        <h2>The Universal Language</h2>
        <p>
          While folk traditions vary dramatically across cultures, they share common threads:
          the preservation of history, the expression of identity, and the power to bring
          communities together. Whether it's a ballad from the Scottish Highlands or a
          work song from the Mississippi Delta, folk music speaks to our shared humanity.
        </p>
      </section>
    </div>
  );
}

export default WorldMusic;
