import { useState } from 'react';

function ArtistImage({ name, src, className }) {
  const [hasError, setHasError] = useState(false);

  // Generate initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  // Generate consistent colors based on name
  const colors = [
    { bg: '#2d2420', accent: '#c9a959' },
    { bg: '#1a1a1a', accent: '#cd853f' },
    { bg: '#3d2914', accent: '#daa520' },
    { bg: '#2a1f1a', accent: '#d2691e' },
    { bg: '#1f2d2a', accent: '#8fbc8f' },
    { bg: '#2d1f2a', accent: '#dda0dd' },
    { bg: '#1a2d2d', accent: '#87ceeb' },
    { bg: '#2d2d1a', accent: '#f0e68c' },
    { bg: '#2a1a1a', accent: '#f08080' },
    { bg: '#1a1a2d', accent: '#b0c4de' }
  ];

  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const { bg, accent } = colors[colorIndex];

  // If we have a valid image URL and no error, show the image
  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={name}
        className={className}
        loading="lazy"
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    );
  }

  // Fallback to styled initials
  return (
    <div
      className={`artist-image-placeholder ${className || ''}`}
      style={{
        backgroundColor: bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        border: `2px solid ${accent}`,
        opacity: 0.2
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-20%',
        width: '70%',
        height: '70%',
        borderRadius: '50%',
        border: `2px solid ${accent}`,
        opacity: 0.15
      }} />

      {/* Guitar icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        style={{ marginBottom: '0.75rem', opacity: 0.7 }}
      >
        <path d="M19.5 4.5l-1 1m-1-1l1 1m-1-1l-1 1m1-1l1-1" />
        <ellipse cx="8" cy="16" rx="5" ry="6" />
        <ellipse cx="8" cy="16" rx="2" ry="2.5" />
        <path d="M13 12l5-5" />
        <path d="M11 10l2-2" />
      </svg>

      {/* Initials */}
      <span style={{
        fontSize: '3.5rem',
        fontFamily: 'Georgia, serif',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        textShadow: `2px 2px 4px rgba(0,0,0,0.3)`
      }}>
        {initials}
      </span>

      {/* Decorative line */}
      <div style={{
        width: '60px',
        height: '2px',
        backgroundColor: accent,
        marginTop: '0.75rem',
        opacity: 0.6
      }} />
    </div>
  );
}

export default ArtistImage;
