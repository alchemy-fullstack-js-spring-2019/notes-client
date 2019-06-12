import { getSessionId } from './sessionSelectors';

export const getNoteDetailState = state => state.noteDetail;
export const getNoteDetail = state => getNoteDetailState(state).detail;
export const getNoteDetailTitle = state => getNoteDetail(state).title;
export const getNoteDetailBody = state => getNoteDetail(state).body;
export const getNoteDetailLoading = state => getNoteDetailState(state).loading;
export const getNoteDetailAuthor = state => getNoteDetail(state).author || {};
export const getNoteDetailOwnerId = state => getNoteDetailAuthor(state).id;
export const getNoteDetailOwnedBySession = state => {
  return getNoteDetailOwnerId(state) === getSessionId(state);
};
