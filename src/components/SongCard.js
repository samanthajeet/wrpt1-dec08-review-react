import React from 'react';

const SongCard = (props) => {
  const { title, artist, photo } = props.song;
  return (
    <div className="song-card">
      <div className="song-text">
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
      <img src={photo} alt={artist} />
    </div>
  )
};

export default SongCard;