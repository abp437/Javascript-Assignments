import React, { useState, useEffect } from 'react';
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

  const [age, setAge] = useState(24);

  useEffect(() => {
    console.log('Use Effect Hook Ran');
  }, [songs]);

  useEffect(() => {
    console.log('Use Effect Hook Ran for Age');
  }, [age]);

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
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;
