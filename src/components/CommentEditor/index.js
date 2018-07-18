import React, { Component } from 'react';
import { Container, Avatar, TextField } from './styles';

import Avatar1 from '../../assets/images/avatars/01.png';

class CommentEditor extends Component {
  state = {
    content: '',
    placeholder: 'Escreva um comentário...',
    editing: false,
  };

  handleEditorFocus = () => {
    this.setState({ editing: true });
  };

  handleEditorBlur = () => {
    const content = document.getElementById('comment-textfield').textContent;
    this.setState({ content, editing: false });
  };

  render() {
    const { content, placeholder, editing } = this.state;
    return (
      <Container>
        <Avatar src={Avatar1} />
        <TextField
          contentEditable="true"
          onFocus={this.handleEditorFocus}
          onBlur={this.handleEditorBlur}
          suppressContentEditableWarning
          id="comment-textfield"
        >
          {!editing && content.length < 1 ? placeholder : content}
        </TextField>
      </Container>
    );
  }
}

export default CommentEditor;
