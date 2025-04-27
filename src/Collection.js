// src/Collection.js
import React from 'react';

// Sample stickers (you can replace these with your real ones)
const stickers = [
  '/images/ducky.png',
  '/images/Piggy.png',
  '/images/power.png',
  '/images/Sammy.png',
  '/images/Sandwichy.png',
  '/images/sparco.png',
  '/images/Trashy.png',
  '/images/ducky.png',
  '/images/Piggy.png',
  '/images/power.png',
  '/images/Sammy.png',
  '/images/Sandwichy.png',
  '/images/Ducky.png',
  '/images/Trashy.png',
  '/images/Sammy.png'
];

const styles = {
  container: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'left'
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    marginLeft: 'auto'
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    borderBottom: '2px solid black',
    paddingBottom: '8px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  },
  sticker: {
    width: '100%',
    objectFit: 'contain'
  }
};

function Collection() {
  return (
    <div style={styles.container}>
      <div style={styles.headerRow}>
        <h1 style={styles.title}>Collection</h1>
        <img
          src="/icons/search.svg"
          alt="Search"
          style={styles.searchIcon}
        />
      </div>

      <div style={styles.grid}>
        {stickers.map((sticker, index) => (
          <img key={index} src={sticker} alt={`Sticker ${index}`} style={styles.sticker} />
        ))}
      </div>
    </div>
  );
}

export default Collection;