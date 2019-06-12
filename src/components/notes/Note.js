import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <p>{note.title} - by {note.author.email}</p>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Note;
