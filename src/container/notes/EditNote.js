import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { updateNoteDetail } from '../../actions/noteDetailActions';
import { getNoteDetailTitle, getNoteDetailBody } from '../../selectors/noteDetailSelectors';

class EditNote extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    editNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    this.setState({ title: this.props.title, body: this.props.body });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.editNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <NoteForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        title={title}
        body={body}
        submitText="Edit Note"
      />
    );
  }
}

const mapStateToProps = state => ({
  title: getNoteDetailTitle(state),
  body: getNoteDetailBody(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  editNote(note) {
    dispatch(updateNoteDetail({ ...note, _id: match.params.id }));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote));
