import { FETCH_NOTE_DETAIL, FETCH_NOTE_DETAIL_LOADING, UPDATE_NOTE_DETAIL, UPDATE_NOTE_DETAIL_LOADING } from '../actions/noteDetailActions';

const initialState = {
  loading: true,
  detail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTE_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    case FETCH_NOTE_DETAIL_LOADING:
      return { ...state, loading: true };
    case UPDATE_NOTE_DETAIL:
      return { ...state, loading: false, detail: action.payload };
    case UPDATE_NOTE_DETAIL_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
