import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../../store/ducks/post';

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
    publishRequest: PropTypes.func.isRequired,
  };

  // Paste as plain text into TextField
  onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  handleSubmit = () => {
    const { publishRequest } = this.props;
    const textField = document.getElementById('text-field');
    publishRequest({ content: textField.textContent });
    textField.textContent = '';
  };

  render() {
    const { user } = this.props;
    const firstName = user.data.name.split(' ')[0];
    return (
      <Container>
        <Grid>
          <Avatar image={user.data.avatar.image} />
          <TextField
            id="text-field"
            contentEditable="true"
            suppressContentEditableWarning
            placeholder={`No que você está pensando, ${firstName}?`}
            onPaste={this.onPaste}
          />
        </Grid>
        <Footer>
          <Button type="button" onClick={this.handleSubmit}>
            Publicar
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostEditor);
