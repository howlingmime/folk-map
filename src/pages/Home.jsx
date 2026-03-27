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

      <section className="section iconic-albums-section">
        <h2>Iconic Folk Albums</h2>
        <p className="section-intro">Records that defined the genre and changed the conversation</p>
        <div className="albums-grid">
          <div className="album-card">
            <div className="album-year">1962</div>
            <h3>The Freewheelin' Bob Dylan</h3>
            <p className="album-artist">Bob Dylan</p>
            <p>The album that turned a 21-year-old from Minnesota into the voice of a generation. "Blowin' in the Wind" and "A Hard Rain's a-Gonna Fall" redefined what a folk song could say.</p>
          </div>
          <div className="album-card">
            <div className="album-year">1956</div>
            <h3>Odetta Sings Ballads and Blues</h3>
            <p className="album-artist">Odetta</p>
            <p>The record that made Bob Dylan put down his electric guitar and pick up an acoustic. Odetta's voice on this album launched a thousand folk careers.</p>
          </div>
          <div className="album-card">
            <div className="album-year">1960</div>
            <h3>Joan Baez</h3>
            <p className="album-artist">Joan Baez</p>
            <p>Her self-titled debut brought traditional ballads to a new audience with a soprano voice of crystalline purity. It spent years on the charts and made folk mainstream.</p>
          </div>
          <div className="album-card">
            <div className="album-year">1941</div>
            <h3>Dust Bowl Ballads</h3>
            <p className="album-artist">Woody Guthrie</p>
            <p>One of the first concept albums ever recorded, documenting the devastation of the Dust Bowl through the eyes of those who lived it. Raw, real, and revolutionary.</p>
          </div>
          <div className="album-card">
            <div className="album-year">1964</div>
            <h3>I Ain't Marching Anymore</h3>
            <p className="album-artist">Phil Ochs</p>
            <p>The title track became the anti-war anthem of a generation. Ochs called himself a "singing journalist"—this album is his most powerful dispatch from the front lines of protest.</p>
          </div>
          <div className="album-card">
            <div className="album-year">1967</div>
            <h3>Pata Pata</h3>
            <p className="album-artist">Miriam Makeba</p>
            <p>Joyful, danceable, and defiantly African. Released while Makeba was exiled from South Africa, it introduced millions to the rhythms and spirit of a continent.</p>
          </div>
        </div>
      </section>

      <section className="section venues-section">
        <h2>Sacred Ground</h2>
        <p className="section-intro">The venues and places where folk music was made</p>
        <div className="venues-grid">
          <div className="venue-card">
            <h3>Greenwich Village, NYC</h3>
            <p className="venue-location">New York, USA</p>
            <p>The epicenter of the 1960s folk revival. Tiny clubs like the Gaslight Cafe, Cafe Wha?, and Gerde's Folk City launched Dylan, Baez, Dave Van Ronk, and dozens more into the spotlight.</p>
          </div>
          <div className="venue-card">
            <h3>Newport Folk Festival</h3>
            <p className="venue-location">Newport, Rhode Island, USA</p>
            <p>Founded in 1959, Newport became the annual summit of American folk. It's where Joan Baez introduced Dylan to the world—and where Dylan shocked it by going electric in 1965.</p>
          </div>
          <div className="venue-card">
            <h3>Pena de los Parra</h3>
            <p className="venue-location">Santiago, Chile</p>
            <p>The folk club founded by Angel and Isabel Parra became the heart of Nueva Cancion. Victor Jara, Violeta Parra, and Inti-Illimani all performed here before the 1973 coup silenced the music.</p>
          </div>
          <div className="venue-card">
            <h3>Cecil Sharp House</h3>
            <p className="venue-location">London, England</p>
            <p>Home of the English Folk Dance and Song Society since 1930. Named for the collector who traveled Appalachia recording folk songs, it remains the spiritual home of English folk music.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"A guitar has moonlight in it."</p>
          <cite>— James M. Cain</cite>
        </blockquote>
      </section>

      <section className="section women-section">
        <h2>Women Who Shaped Folk</h2>
        <p className="section-intro">The female voices too often overlooked in folk history</p>
        <div className="women-grid">
          <div className="woman-card">
            <h3>Violeta Parra</h3>
            <p className="woman-years">1917–1967, Chile</p>
            <p>The mother of Nueva Cancion. She traveled Chile collecting folk songs, then transformed them into art. Her "Gracias a la Vida" is one of the most covered songs in Latin American history. She also created groundbreaking visual art, becoming the first Latin American to exhibit at the Louvre.</p>
          </div>
          <div className="woman-card">
            <h3>Buffy Sainte-Marie</h3>
            <p className="woman-years">1941–present, Canada</p>
            <p>A Cree singer-songwriter who fought for Indigenous rights through music decades before it was fashionable. Her "Universal Soldier" became a global anti-war anthem, and "Up Where We Belong" won an Academy Award. She was blacklisted by the Johnson and Nixon administrations.</p>
          </div>
          <div className="woman-card">
            <h3>Mercedes Sosa</h3>
            <p className="woman-years">1935–2009, Argentina</p>
            <p>Known as "La Negra," she was the greatest voice of Argentine folk. Exiled during the military dictatorship, she returned to sold-out concerts and continued singing for justice until her death. Her voice could fill a stadium and break a heart simultaneously.</p>
          </div>
          <div className="woman-card">
            <h3>Joni Mitchell</h3>
            <p className="woman-years">1943–present, Canada</p>
            <p>She expanded what folk could be—open tunings, jazz harmonies, confessional lyrics that went beyond protest into the landscape of inner life. "Blue" is regularly cited as one of the greatest albums ever made in any genre.</p>
          </div>
        </div>
      </section>

      <section className="section folk-vs-section">
        <h2>Folk vs. Everything</h2>
        <p className="section-intro">How folk music connects to and diverges from other traditions</p>
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Folk vs. Country</h3>
            <p>They share roots in Appalachian music and rural storytelling, but country became a commercial genre centered in Nashville while folk stayed closer to its community and protest origins. The lines blur constantly—Woody Guthrie influenced both traditions.</p>
          </div>
          <div className="comparison-card">
            <h3>Folk vs. Blues</h3>
            <p>The blues emerged from African American experience in the Deep South; folk is a broader umbrella that absorbed the blues and many other traditions. Lead Belly bridged both worlds, and the folk revival brought blues artists to white college audiences for the first time.</p>
          </div>
          <div className="comparison-card">
            <h3>Folk vs. Rock</h3>
            <p>When Dylan went electric, he didn't leave folk—he dragged it into rock. Folk-rock, from the Byrds to Mumford & Sons, proves these genres are siblings, not strangers. The difference is often just a question of amplification and attitude.</p>
          </div>
          <div className="comparison-card">
            <h3>Folk vs. Punk</h3>
            <p>More alike than you'd think. Both are DIY, anti-establishment, and rooted in the belief that you don't need virtuosity or a record deal to make music that matters. Billy Bragg calls himself "a one-man clash between folk and punk."</p>
          </div>
        </div>
      </section>

      <section className="section banned-section">
        <h2>Songs They Tried to Silence</h2>
        <div className="banned-list">
          <div className="banned-song">
            <div className="banned-icon">🚫</div>
            <div className="banned-info">
              <h3>Strange Fruit — Billie Holiday</h3>
              <p className="banned-detail">Banned from radio, 1939</p>
              <p>Her record label Columbia refused to record it. Holiday released it on a small jazz label instead. Radio stations across the country refused to play it. Time magazine called it "a prime piece of musical propaganda."</p>
            </div>
          </div>
          <div className="banned-song">
            <div className="banned-icon">🚫</div>
            <div className="banned-info">
              <h3>This Land Is Your Land — Woody Guthrie</h3>
              <p className="banned-detail">Censored verses suppressed, 1940s–2000s</p>
              <p>The verses about private property signs and relief office lines were quietly dropped from songbooks and school curricula for decades, turning a radical anthem into a safe patriotic sing-along.</p>
            </div>
          </div>
          <div className="banned-song">
            <div className="banned-icon">🚫</div>
            <div className="banned-info">
              <h3>Te Recuerdo Amanda — Victor Jara</h3>
              <p className="banned-detail">Banned in Chile, 1973–1990</p>
              <p>After the coup, Pinochet's regime banned all of Jara's music. Possessing his records could lead to arrest or worse. Chileans kept his songs alive by passing cassette tapes in secret.</p>
            </div>
          </div>
          <div className="banned-song">
            <div className="banned-icon">🚫</div>
            <div className="banned-info">
              <h3>Goodnight, Irene — The Weavers</h3>
              <p className="banned-detail">Artists blacklisted, 1950s</p>
              <p>The Weavers had the #1 song in America, then were erased from the industry overnight when Pete Seeger and the group were blacklisted during the McCarthy era. Their music vanished from radio for years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section songwriting-section">
        <h2>Anatomy of a Folk Song</h2>
        <p className="section-intro">What makes a folk song different from any other kind of song?</p>
        <div className="anatomy-grid">
          <div className="anatomy-card">
            <div className="anatomy-number">01</div>
            <h3>Story First</h3>
            <p>Folk songs tell stories. Not abstract emotions or clever wordplay, but narratives about real people, real events, and real consequences. The best folk songs are small movies you can carry in your head.</p>
          </div>
          <div className="anatomy-card">
            <div className="anatomy-number">02</div>
            <h3>Simple Melody</h3>
            <p>A folk melody should be singable by anyone after hearing it once. Three chords and the truth, as Harlan Howard said about country music (which borrowed the idea from folk). Complexity serves no one when the goal is communal singing.</p>
          </div>
          <div className="anatomy-card">
            <div className="anatomy-number">03</div>
            <h3>Shared Ownership</h3>
            <p>The best folk songs outlive their creators and belong to everyone. They get adapted, rewritten, and passed on. "We Shall Overcome" has no single author—it belongs to every person who has ever sung it in the face of injustice.</p>
          </div>
          <div className="anatomy-card">
            <div className="anatomy-number">04</div>
            <h3>Purpose Beyond Entertainment</h3>
            <p>Folk songs work. They organize labor, mourn the dead, celebrate harvests, march against wars. Every folk song exists for a reason beyond filling airtime. Even love songs in the folk tradition carry the weight of a specific time and place.</p>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <blockquote>
          <p>"There but for fortune may go you or I."</p>
          <cite>— Phil Ochs</cite>
        </blockquote>
      </section>

      <section className="section folk-today-section">
        <h2>Folk Music Today</h2>
        <p className="section-intro">The tradition is alive, evolving, and more relevant than ever</p>
        <div className="today-grid">
          <div className="today-card">
            <h3>Climate Anthems</h3>
            <p>As the climate crisis deepens, a new generation of folk musicians is writing the protest songs of the 21st century. From Extinction Rebellion singalongs to indigenous land defenders' chants, the tradition of singing for the earth continues.</p>
          </div>
          <div className="today-card">
            <h3>Digital Folk</h3>
            <p>TikTok sea shanties, viral protest songs, and bedroom folk recordings shared on Bandcamp—technology hasn't killed folk music, it's given it new channels. The campfire is now a screen, but the human need to share songs hasn't changed.</p>
          </div>
          <div className="today-card">
            <h3>Indigenous Revival</h3>
            <p>From the Maori haka to Inuit throat singing to Native American powwow drums, indigenous folk traditions are experiencing a powerful renaissance. Young artists are reclaiming ancestral songs while creating new ones.</p>
          </div>
          <div className="today-card">
            <h3>Protest Playlists</h3>
            <p>Every modern social movement comes with its own soundtrack. Black Lives Matter, Standing Rock, Hong Kong's Umbrella Movement—all generated songs that draw directly from the folk protest tradition, even when the sound is hip-hop or electronic.</p>
          </div>
        </div>
      </section>

      <section className="section glossary-section">
        <h2>Folk Music Glossary</h2>
        <p className="section-intro">Key terms you'll encounter on your journey through folk music</p>
        <div className="glossary-grid">
          <div className="glossary-item">
            <h3>Ballad</h3>
            <p>A narrative song that tells a story, usually in verse form with a repeating refrain. Murder ballads, love ballads, and historical ballads form the backbone of the Anglo-American folk tradition.</p>
          </div>
          <div className="glossary-item">
            <h3>Field Holler</h3>
            <p>A vocal tradition of enslaved African Americans, consisting of improvised calls and cries sung while working in fields. Field hollers are a direct ancestor of the blues.</p>
          </div>
          <div className="glossary-item">
            <h3>Hootenanny</h3>
            <p>An informal gathering of folk musicians for a jam session, popularized by Pete Seeger and Woody Guthrie in the 1940s. The term became so mainstream that ABC created a TV show called "Hootenanny" in 1963.</p>
          </div>
          <div className="glossary-item">
            <h3>Broadside</h3>
            <p>Printed sheets with song lyrics, sold cheaply on the street from the 16th century onward. Broadsides were the social media of their era—spreading news, gossip, and protest through song.</p>
          </div>
          <div className="glossary-item">
            <h3>Topical Song</h3>
            <p>A song written about a specific current event. Phil Ochs was the master of the form, writing songs about news stories so fast that they were sometimes outdated before the album was pressed.</p>
          </div>
          <div className="glossary-item">
            <h3>Shape Note Singing</h3>
            <p>A sacred folk music tradition using a distinctive notation system to teach singing. Still practiced in communities across the American South, shape note singing is communal, powerful, and deeply spiritual.</p>
          </div>
        </div>
      </section>

      <section className="section reading-section">
        <h2>Further Reading</h2>
        <p className="section-intro">Books that will deepen your understanding of folk music</p>
        <div className="books-grid">
          <div className="book-card">
            <div className="book-icon">📖</div>
            <h3>The Land Where the Blues Began</h3>
            <p className="book-author">Alan Lomax</p>
            <p>The legendary folklorist's account of his journeys through the Mississippi Delta, recording the blues at its source. Part memoir, part ethnography, entirely essential.</p>
          </div>
          <div className="book-card">
            <div className="book-icon">📖</div>
            <h3>No Direction Home</h3>
            <p className="book-author">Robert Shelton</p>
            <p>The definitive biography of Bob Dylan's early years, from his arrival in Greenwich Village to his transformation of American music. Written by the critic who first championed Dylan.</p>
          </div>
          <div className="book-card">
            <div className="book-icon">📖</div>
            <h3>Where Did You Sleep Last Night?</h3>
            <p className="book-author">Danielle Fuentes Morgan</p>
            <p>A reexamination of Lead Belly's life and legacy that centers Black artistry in the folk tradition, challenging the narratives constructed by white folklorists.</p>
          </div>
          <div className="book-card">
            <div className="book-icon">📖</div>
            <h3>33 Revolutions Per Minute</h3>
            <p className="book-author">Dorian Lynskey</p>
            <p>A history of protest music from Billie Holiday to Green Day, tracing how songs have accompanied every major social upheaval of the past century.</p>
          </div>
        </div>
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
