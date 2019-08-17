import React, { useState } from 'react';

const NewSongForm = (props) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>Song Name:</label>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
        required
      />
      <input type="submit" value="Add Song" />
    </form>
  );
}

export default NewSongForm;
