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

      <section className="section timeline-section">
        <h2>A Brief History of Folk Music</h2>
        <div className="history-timeline">
          <div className="history-item">
            <div className="history-year">Pre-1900s</div>
            <div className="history-desc">
              <h3>Oral Traditions</h3>
              <p>For centuries, folk songs were passed down by word of mouth—work songs in the fields, sea shanties on ships, ballads by the fireside. No recordings, no sheet music, just voices carrying stories across generations.</p>
            </div>
          </div>
          <div className="history-item">
            <div className="history-year">1920s–40s</div>
            <div className="history-desc">
              <h3>The First Recordings</h3>
              <p>Folklorists like John and Alan Lomax traveled the American South with portable recording equipment, capturing the voices of Lead Belly, Muddy Waters, and countless anonymous singers. These recordings preserved a vanishing world.</p>
            </div>
          </div>
          <div className="history-item">
            <div className="history-year">1950s–60s</div>
            <div className="history-desc">
              <h3>The Folk Revival</h3>
              <p>Greenwich Village coffeehouses became ground zero for a musical revolution. Pete Seeger, Joan Baez, and a young Bob Dylan transformed folk from rural tradition into the voice of a generation fighting for civil rights and peace.</p>
            </div>
          </div>
          <div className="history-item">
            <div className="history-year">1970s–90s</div>
            <div className="history-desc">
              <h3>Global Expansion</h3>
              <p>Folk music went global as artists like Victor Jara, Miriam Makeba, and Mercedes Sosa connected local struggles to international solidarity movements. Nueva Cancion and world music became forces for change.</p>
            </div>
          </div>
          <div className="history-item">
            <div className="history-year">2000s–Now</div>
            <div className="history-desc">
              <h3>The New Folk</h3>
              <p>A new generation of folk artists blends tradition with modern sounds. From Americana to indie folk, from digital protest songs to climate anthems, the folk spirit evolves while its core mission endures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section instruments-section">
        <h2>Instruments of Folk</h2>
        <p className="section-intro">The tools that shaped the sound of the people</p>
        <div className="instruments-grid">
          <div className="instrument-card">
            <div className="instrument-icon">🎸</div>
            <h3>Acoustic Guitar</h3>
            <p>The backbone of American and European folk. From Woody Guthrie's "machine that kills fascists" to the fingerpicking of Mississippi John Hurt, the guitar became the people's instrument.</p>
          </div>
          <div className="instrument-card">
            <div className="instrument-icon">🪕</div>
            <h3>Banjo</h3>
            <p>Brought to America by enslaved Africans, the banjo became central to Appalachian music. Its bright, percussive sound defines old-time and bluegrass traditions.</p>
          </div>
          <div className="instrument-card">
            <div className="instrument-icon">🎻</div>
            <h3>Fiddle</h3>
            <p>The same instrument as the violin, but with a different soul. From Irish reels to Cajun two-steps, the fiddle drives dance music on every continent.</p>
          </div>
          <div className="instrument-card">
            <div className="instrument-icon">🪗</div>
            <h3>Accordion</h3>
            <p>From French musette to Argentine tango, from Tex-Mex conjunto to Zydeco, the accordion bridges European and American folk traditions with its rich, breathing tones.</p>
          </div>
          <div className="instrument-card">
            <div className="instrument-icon">🪘</div>
            <h3>Hand Drums</h3>
            <p>The djembe, bodhran, cajon, and tabla—hand drums are the heartbeat of folk traditions worldwide, connecting rhythm to community and ceremony.</p>
          </div>
          <div className="instrument-card">
            <div className="instrument-icon">🎵</div>
            <h3>Harmonica</h3>
            <p>Small enough to fit in a pocket, powerful enough to carry the blues. The harmonica gave voice to railroad workers, prisoners, and wanderers across the American landscape.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"I ain't marching anymore."</p>
          <cite>— Phil Ochs</cite>
        </blockquote>
      </section>

      <section className="section essential-songs-section">
        <h2>10 Essential Folk Songs</h2>
        <p className="section-intro">Songs that defined an era and still resonate today</p>
        <div className="essential-songs-list">
          <div className="essential-song">
            <span className="song-number">01</span>
            <div className="song-info">
              <h3>This Land Is Your Land</h3>
              <p className="song-artist">Woody Guthrie, 1940</p>
              <p>Written as a radical response to "God Bless America," its censored verses challenge private property and inequality.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">02</span>
            <div className="song-info">
              <h3>We Shall Overcome</h3>
              <p className="song-artist">Adapted by Pete Seeger, 1940s</p>
              <p>Born from a gospel hymn, this became the anthem of the Civil Rights Movement, sung by millions worldwide.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">03</span>
            <div className="song-info">
              <h3>Blowin' in the Wind</h3>
              <p className="song-artist">Bob Dylan, 1962</p>
              <p>Questions without answers that captured the restlessness of a generation demanding change.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">04</span>
            <div className="song-info">
              <h3>If I Had a Hammer</h3>
              <p className="song-artist">Pete Seeger & Lee Hays, 1949</p>
              <p>A simple song about justice, freedom, and love that became a rallying cry for the labor and civil rights movements.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">05</span>
            <div className="song-info">
              <h3>El Derecho de Vivir en Paz</h3>
              <p className="song-artist">Victor Jara, 1971</p>
              <p>A plea for the right to live in peace, dedicated to Vietnam. Jara was murdered two years later by Pinochet's regime.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">06</span>
            <div className="song-info">
              <h3>Strange Fruit</h3>
              <p className="song-artist">Billie Holiday, 1939</p>
              <p>A searing indictment of lynching in the American South, called "the beginning of the civil rights movement" by some historians.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">07</span>
            <div className="song-info">
              <h3>Goodnight, Irene</h3>
              <p className="song-artist">Lead Belly, 1933</p>
              <p>A tender folk standard that became a #1 hit for the Weavers and entered the American songbook forever.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">08</span>
            <div className="song-info">
              <h3>Pata Pata</h3>
              <p className="song-artist">Miriam Makeba, 1967</p>
              <p>A joyful South African dance song that introduced the world to African music while Makeba fought apartheid from exile.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">09</span>
            <div className="song-info">
              <h3>Where Have All the Flowers Gone?</h3>
              <p className="song-artist">Pete Seeger, 1955</p>
              <p>A circular song of loss and war that never resolves, because the cycle of violence never does either.</p>
            </div>
          </div>
          <div className="essential-song">
            <span className="song-number">10</span>
            <div className="song-info">
              <h3>Deportee (Plane Wreck at Los Gatos)</h3>
              <p className="song-artist">Woody Guthrie, 1948</p>
              <p>Written after a plane crash killed 28 Mexican deportees whose names went unreported. Guthrie gave them back their humanity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section movements-section">
        <h2>Music & Movements</h2>
        <p className="section-intro">How folk music powered the great social movements of the 20th century</p>
        <div className="movements-grid">
          <div className="movement-card">
            <div className="movement-era">1930s–40s</div>
            <h3>The Labor Movement</h3>
            <p>Union halls rang with songs like "Solidarity Forever" and "Which Side Are You On?" as workers organized for dignity. The Almanac Singers—including Woody Guthrie and Pete Seeger—became the movement's house band.</p>
          </div>
          <div className="movement-card">
            <div className="movement-era">1950s–60s</div>
            <h3>Civil Rights</h3>
            <p>From the Freedom Rides to the March on Washington, music was inseparable from the struggle. "We Shall Overcome," "Oh Freedom," and "Eyes on the Prize" gave marchers courage in the face of violence.</p>
          </div>
          <div className="movement-card">
            <div className="movement-era">1960s–70s</div>
            <h3>Anti-War</h3>
            <p>Vietnam sparked a tidal wave of protest music. Phil Ochs, Joan Baez, and Country Joe McDonald turned concerts into rallies, and songs into weapons against an unjust war.</p>
          </div>
          <div className="movement-card">
            <div className="movement-era">1970s–90s</div>
            <h3>Anti-Apartheid</h3>
            <p>Miriam Makeba, Hugh Masekela, and artists worldwide used music to isolate South Africa's racist regime. "Free Nelson Mandela" became a global anthem that helped end apartheid.</p>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <h2>Folk Music By the Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Songs recorded by the Lomax family</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">250,000</div>
            <div className="stat-label">People at the 1963 March on Washington</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Songs written by Woody Guthrie</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">60+</div>
            <div className="stat-label">Years of Pete Seeger's performing career</div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"Songs are funny things. They can slip across borders."</p>
          <cite>— Pete Seeger</cite>
        </blockquote>
      </section>

      <section className="section legacy-voices-section">
        <h2>Voices That Changed the World</h2>
        <div className="voices-grid">
          <div className="voice-card">
            <div className="voice-quote">"I could have sung songs to make people complacent. I chose not to."</div>
            <div className="voice-author">— Odetta</div>
            <p>Known as "The Voice of the Civil Rights Movement," Odetta's contralto could shake the walls. Martin Luther King Jr. called her the Queen of American Folk Music.</p>
          </div>
          <div className="voice-card">
            <div className="voice-quote">"The duty of a revolutionary is to make the revolution."</div>
            <div className="voice-author">— Victor Jara</div>
            <p>Chile's greatest folk singer was murdered by Pinochet's soldiers, but his songs live on as anthems of resistance across Latin America and beyond.</p>
          </div>
          <div className="voice-card">
            <div className="voice-quote">"I kept my culture. I kept the music of my roots. I became myself."</div>
            <div className="voice-author">— Miriam Makeba</div>
            <p>Exiled from South Africa for 30 years, Mama Africa brought her nation's music—and its struggle—to the world stage.</p>
          </div>
        </div>
      </section>

      <section className="section folk-genres-section">
        <h2>The Many Faces of Folk</h2>
        <p className="section-intro">Folk music isn't one genre—it's a family of traditions</p>
        <div className="genres-grid">
          <div className="genre-card">
            <h3>Appalachian</h3>
            <p>Rooted in Scots-Irish ballads and African American traditions, Appalachian music gave birth to bluegrass, old-time, and country. Banjos, fiddles, and high lonesome harmonies echo through the hollers.</p>
          </div>
          <div className="genre-card">
            <h3>Blues</h3>
            <p>Born in the Mississippi Delta from field hollers and spirituals, the blues is the foundation of American popular music. Every rock, jazz, and soul song carries its DNA.</p>
          </div>
          <div className="genre-card">
            <h3>Celtic</h3>
            <p>Irish, Scottish, and Welsh traditions of jigs, reels, and haunting ballads. From pub sessions in Galway to Cape Breton fiddle music, Celtic folk connects a vast diaspora.</p>
          </div>
          <div className="genre-card">
            <h3>Nueva Cancion</h3>
            <p>Latin America's "New Song" movement fused folk traditions with political activism. Artists like Victor Jara and Violeta Parra made music inseparable from the fight for justice.</p>
          </div>
          <div className="genre-card">
            <h3>Flamenco</h3>
            <p>Andalusia's passionate art form blends Romani, Moorish, and Spanish influences. Guitar, voice, dance, and palmas create an intensity that has captivated the world.</p>
          </div>
          <div className="genre-card">
            <h3>Americana</h3>
            <p>A modern umbrella for roots music that draws on folk, country, blues, and gospel. Artists like Gillian Welch and Jason Isbell carry the torch into the 21st century.</p>
          </div>
        </div>
      </section>

      <section className="section did-you-know-section">
        <h2>Did You Know?</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-icon">📻</div>
            <h3>Blacklisted on the Radio</h3>
            <p>During the McCarthy era, Pete Seeger and the Weavers were blacklisted from radio and TV despite having the #1 hit in the country. Seeger was charged with contempt of Congress for refusing to answer questions about his political associations.</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🎤</div>
            <h3>Dylan Goes Electric</h3>
            <p>When Bob Dylan plugged in his electric guitar at the 1965 Newport Folk Festival, audience members famously booed. Pete Seeger reportedly wanted to cut the power cables with an axe. It was folk music's most controversial moment.</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">📝</div>
            <h3>The Lost Verses</h3>
            <p>"This Land Is Your Land" originally included verses about private property and bread lines that were suppressed for decades. The full version is far more radical than the schoolroom standard we all know.</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🌎</div>
            <h3>Music Without Borders</h3>
            <p>Barbara Dane was the first American artist to perform in North Vietnam during the war. She co-founded Paredon Records to distribute revolutionary music from around the world, building bridges through song.</p>
          </div>
        </div>
      </section>

      <section className="section listening-guide-section">
        <h2>Start Your Journey</h2>
        <p className="section-intro">New to folk music? Here's where to begin</p>
        <div className="guide-steps">
          <div className="guide-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Start with the Classics</h3>
              <p>Listen to Woody Guthrie's "Dust Bowl Ballads" and Pete Seeger's "We Shall Overcome" to understand the roots. These recordings capture the raw, unpolished sound of music made for a purpose.</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Explore the Revival</h3>
              <p>Dive into the 1960s folk revival with Joan Baez's self-titled debut, Odetta's "Ballads and Blues," and Bob Dylan's "The Freewheelin' Bob Dylan." This is where folk met a new generation.</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Go Global</h3>
              <p>Branch out to Victor Jara's "El Derecho de Vivir en Paz," Miriam Makeba's "Pata Pata," and Fela Kuti's Afrobeat. Folk music is a worldwide phenomenon with a thousand flavors.</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Find Your Own Voice</h3>
              <p>Explore contemporary folk and Americana. Listen to what moves you. Pick up an instrument. Write your own songs. Folk music isn't a museum piece—it's a living tradition waiting for your voice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"The answer, my friend, is blowin' in the wind."</p>
          <cite>— Bob Dylan</cite>
        </blockquote>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>The Music Lives On</h2>
          <p>
            Folk and protest music isn't just history—it's happening right now. Every generation
            finds new songs for new struggles. Climate marches echo with chants, online movements
            share protest playlists, and singer-songwriters in small clubs carry on the tradition
            of speaking truth through music. The question isn't whether folk music will survive.
            It's what song you'll sing when the moment comes.
          </p>
          <div className="cta-actions">
            <Link to="/artists" className="btn btn-primary">Explore the Artists</Link>
            <Link to="/world-music" className="btn btn-secondary">Discover World Folk</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
