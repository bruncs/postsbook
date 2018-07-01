import React, { Component } from 'react';

import {
  Container, Grid, Avatar, TextArea,
} from './styles';
import PostEditorFooter from '../PostEditorFooter';

import Avatar1 from '../../assets/images/avatars/01.png';

class PostEditor extends Component {
  state = {
    content: '',
    placeholder: 'No que você está pensando?',
    editing: false,
  };

  handleEditorFocus = () => {
    this.setState({ editing: true });
  };

  handleEditorBlur = () => {
    const content = document.getElementById('textarea').textContent;
    this.setState({ content, editing: false });
  };

  render() {
    const { content, placeholder, editing } = this.state;
    return (
      <Container>
        <Grid>
          <Avatar src={Avatar1} alt="" />

          <TextArea
            contentEditable="true"
            onFocus={this.handleEditorFocus}
            onBlur={this.handleEditorBlur}
            suppressContentEditableWarning
            id="textarea"
          >
            {!editing && content.length < 1 ? placeholder : content}
          </TextArea>
        </Grid>
        <PostEditorFooter />
      </Container>
    );
  }
}

export default PostEditor;
