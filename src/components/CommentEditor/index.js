import React, { Component } from 'react';
import Avatar from '../Avatar';
import { Container, TextField } from './styles';

class CommentEditor extends Component {
  state = {};

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  render() {
    return (
      <Container>
        <Avatar size="small" />
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
