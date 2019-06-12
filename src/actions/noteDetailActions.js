import { createAction } from 'promise-middleware-redux';
import { getNote } from '../services/notesApi';
import { updateNote } from '../services/notesApi';

export const [
  fetchNoteDetail,
  FETCH_NOTE_DETAIL,
  FETCH_NOTE_DETAIL_LOADING
] = createAction('FETCH_NOTE_DETAIL', getNote);

export const [
  updateNoteDetail,
  UPDATE_NOTE_DETAIL,
  UPDATE_NOTE_DETAIL_LOADING
] = createAction('UPDATE_NOTE_DETAIL', updateNote);
