import React, { Component } from 'react';
import { Container, Avatar, TextField } from './styles';

import Avatar1 from '../../assets/images/avatars/01.png';

class CommentEditor extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Avatar src={Avatar1} />
        <TextField
          contentEditable="true"
          onFocus={this.handleEditorFocus}
          onBlur={this.handleEditorBlur}
          suppressContentEditableWarning
          placeholder="Escreva seu comentário..."
        />
      </Container>
    );
  }
}

export default CommentEditor;
