import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';

function NoteDetail({ note, owned }) {
  const {
    title,
    body,
    author
  } = note;

  const displayComp = owned ?
    (
      <>
        <h2>{title}</h2>
        <h4>{author.email}</h4>
        <p>{body}</p>
      </>
    ) :
    (
      <NoteForm title={title} body={body} />
    );

  return displayComp;

}

NoteDetail.propTypes = {
  owned: PropTypes.bool.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default NoteDetail;
