import React from 'react';

const SongCard = (props) => {
  const { title, artist, photo } = props.song;
  return (
    <div className="song-card shadow-4">
      <div className="song-text">
        <div className="song-title">
          <h2>{title}</h2>
        </div>
        <p>{artist}</p>
      </div>
      <section className="song-image">
        <img src={photo} alt={artist} />
      </section>
    </div>
  )
};

export default SongCard;