import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteDetail from '../../components/notes/NoteDetail';
import { fetchNoteDetail } from '../../actions/noteDetailActions';
import { getNoteDetail, getNoteDetailLoading, getNoteDetailOwnedBySession } from '../../selectors/noteDetailSelectors';
import { getSessionId } from '../../selectors/sessionSelectors';

class NoteById extends PureComponent {
  static propTypes = {
    note: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      author: PropTypes.shape({
        email: PropTypes.string
      })
    }),
    owned: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, note, owned } = this.props;
    if(loading) return <h1>Loading....</h1>;

    return <NoteDetail owned={owned} note={note} />;
  }
}

const mapStateToProps = state => ({
  owned: getNoteDetailOwnedBySession(state),
  note: getNoteDetail(state),
  loading: getNoteDetailLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchNoteDetail(match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteById));
