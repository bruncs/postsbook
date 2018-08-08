import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Container, TextField } from './styles';

class CommentEditor extends Component {
  static propTypes = {
    userAvatar: PropTypes.shape().isRequired,
  };

  state = {};

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  render() {
    const { userAvatar } = this.props;
    return (
      <Container>
        <Avatar size="small" image={userAvatar} />
        <TextField
          contentEditable="true"
          onPaste={this.onPaste}
          suppressContentEditableWarning
          placeholder="Escreva um comentário..."
        />
      </Container>
    );
  }
}

export default CommentEditor;
