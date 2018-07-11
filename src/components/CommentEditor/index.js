import React, { Component } from 'react';
import { Container, Avatar, TextField } from './styles';

import Avatar1 from '../../assets/images/avatars/01.png';

class CommentEditor extends Component {
  state = {
    content: '',
    placeholder: 'Escreva um comentário...',
    editing: false,
  };

  render() {
    const { content, placeholder, editing } = this.state;
    return (
      <Container>
        <Avatar src={Avatar1} />
        <TextField contentEditable="true" suppressContentEditableWarning id="comment-textfield">
          {!editing && content.length < 1 ? placeholder : content}
        </TextField>
      </Container>
    );
  }
}

export default CommentEditor;
