import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, TextField } from './styles';
import Avatar from '../Avatar';
import PostEditorFooter from '../PostEditorFooter';

class PostEditor extends Component {
  static propTypes = {
    user: PropTypes.shape({
      data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          image: PropTypes.shape(),
        }),
      }),
    }).isRequired,
  };

  state = {};

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  render() {
    const { user } = this.props;
    const firstName = user.data.name.split(' ')[0];
    return (
      <Container>
        <Grid>
          <Avatar image={user.data.avatar.image} />
          <TextField
            contentEditable="true"
            suppressContentEditableWarning
            placeholder={`No que você está pensando, ${firstName}?`}
            onPaste={this.onPaste}
          />
        </Grid>
        <PostEditorFooter />
      </Container>
    );
  }
}

export default PostEditor;
