import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Grid, TextField, Footer, Button,
} from './styles';
import Avatar from '../Avatar';

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

  state = {
    content: 'Brunao',
  };

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  handleSubmit = () => {};

  handleChange = e => this.setState({ [e.target.name]: 'Loucura' });

  render() {
    const { user } = this.props;
    const { content } = this.state;
    const firstName = user.data.name.split(' ')[0];
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Grid>
            <Avatar image={user.data.avatar.image} />
            <TextField
              name="content"
              contentEditable="true"
              suppressContentEditableWarning
              placeholder={`No que você está pensando, ${firstName}?`}
              onChange={this.handleChange}
              onPaste={this.onPaste}
            >
              {content}
            </TextField>
          </Grid>
          <Footer>
            <Button type="submit">Publicar</Button>
          </Footer>
        </form>
      </Container>
    );
  }
}

export default PostEditor;
