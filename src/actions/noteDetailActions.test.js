import { fetchNoteDetail } from './noteDetailActions';

describe('note detail actions', () => {
  it('creates an action to fetch note detail', () => {
    const action = fetchNoteDetail('12344');

    expect(action).toEqual({
      type: 'FETCH_NOTE_DETAIL',
      pendingType: 'FETCH_NOTE_DETAIL_PENDING',
      fulfilledType: 'FETCH_NOTE_DETAIL_FULFILLED',
      rejectedType: 'FETCH_NOTE_DETAIL_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
