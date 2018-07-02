import React, { Component } from 'react';
import { Container, Avatar, TextArea } from './styles';

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
        <TextArea contentEditable="true" suppressContentEditableWarning id="comment-textarea">
          {!editing && content.length < 1 ? placeholder : content}
        </TextArea>
      </Container>
    );
  }
}

export default CommentEditor;
