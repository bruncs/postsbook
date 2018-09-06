import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Container, TextField } from './styles';

class CommentEditor extends Component {
  static propTypes = {
    userAvatar: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.textField = React.createRef();
    this.handleComment = this.handleComment.bind(this);
  }

  state = {};

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  handleComment() {
    this.textField.current.focus();
  }

  render() {
    const { userAvatar } = this.props;
    return (
      <Container onClick={this.handleComment}>
        <Avatar size="small" image={userAvatar} />
        <TextField
          contentEditable="true"
          onPaste={this.onPaste}
          suppressContentEditableWarning
          placeholder="Escreva um comentário..."
          ref={this.textField}
        />
      </Container>
    );
  }
}

export default CommentEditor;
