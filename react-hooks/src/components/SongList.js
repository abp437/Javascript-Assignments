import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: 'Mr. Tambourine Man',
    },
    {
      id: 2,
      title: 'Blowin in the Wind',
    },
    {
      id: 3,
      title: 'The Times they are a changing',
    },
    {
      id: 4,
      title: 'One too many Mornings',
    },
  ]);

  const addSong = (title) => {
    setSongs([...songs, {
      id: Math.floor((Math.random() * 1000) * (Math.random() * 1000)),
      title,
    }]);
  }
  return (
    <div className="song-list">
      <ul>
        {
          songs.map((song) => {
            const { id, title } = song;
            return (
              <li key={id}>{title}</li>
            );
          })
        }
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
