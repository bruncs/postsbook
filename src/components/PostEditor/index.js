import React, { Component } from 'react';

import { Container, Grid, TextField } from './styles';
import Avatar from '../Avatar';
import PostEditorFooter from '../PostEditorFooter';

class PostEditor extends Component {
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
        <Grid>
          <Avatar />
          <TextField
            contentEditable="true"
            suppressContentEditableWarning
            placeholder="No que você está pensando?"
            onPaste={this.onPaste}
          />
        </Grid>
        <PostEditorFooter />
      </Container>
    );
  }
}

export default PostEditor;
