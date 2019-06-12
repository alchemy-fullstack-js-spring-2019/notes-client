import { combineReducers } from 'redux';
import notes from './notesReducer';
import session from './sessionReducer';
import noteDetail from './noteDetailReducer';

export default combineReducers({
  notes,
  session,
  noteDetail
});
