import React, { Component } from 'react';

import {
  Container, Grid, Avatar, TextArea,
} from './styles';
import PostEditorFooter from '../PostEditorFooter';

import Avatar1 from '../../assets/images/avatars/01.png';

class PostEditor extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Grid style={{ display: 'flex' }}>
          <Avatar src={Avatar1} alt="" />

          <TextArea contentEditable="true">
No que você está pensando?
          </TextArea>
        </Grid>
        <PostEditorFooter />
      </Container>
    );
  }
}

export default PostEditor;
