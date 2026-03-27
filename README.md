# Folksy

A React web app exploring the history of folk and protest music — the artists, instruments, movements, and songs that shaped the world.

## Features

- **Home** — rich landing page with 15 sections covering folk music history, essential songs, instruments, genres, movements, notable quotes, stats, and a listening guide for newcomers
- **Artists** — browsable grid of folk and protest musicians with filterable tags
- **Artist Detail** — in-depth profiles with bios, notable songs, themes, and navigation between artists
- **World Folk Music** — tabbed explorer of folk traditions across global regions, with descriptions and key instruments
- **Protest Music History** — timeline of how music powered social movements, from labor organizing to anti-apartheid

## Tech Stack

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) 7
- [Vite](https://vite.dev/) 7

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── ArtistCard.jsx    # Card component for artist grid
│   ├── ArtistImage.jsx   # Image component with fallback handling
│   ├── Header.jsx        # Site header with navigation
│   └── Footer.jsx        # Site footer
├── data/
│   └── folkMusic.js      # All artist, region, and protest history data
├── pages/
│   ├── Home.jsx          # Landing page with all content sections
│   ├── Artists.jsx       # Filterable artist grid
│   ├── ArtistDetail.jsx  # Individual artist profile
│   ├── WorldMusic.jsx    # World folk traditions explorer
│   └── ProtestMusic.jsx  # Protest music timeline
├── App.jsx               # Router and layout
├── App.css               # All component styles
├── index.css             # Base reset
└── main.jsx              # Entry point
```
