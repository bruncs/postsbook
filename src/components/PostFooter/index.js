import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, ActionButton, Icon } from './styles';
import CommentEditor from '../CommentEditor';

import LikeIcon from '../../assets/images/icons/like.png';
import CommentIcon from '../../assets/images/icons/comment.png';
import ShareIcon from '../../assets/images/icons/share.png';

class PostHeader extends Component {
  static propTypes = {
    userAvatar: PropTypes.shape().isRequired,
  };

  state = {};

  render() {
    const { userAvatar } = this.props;
    return (
      <Fragment>
        <Container>
          <ActionButton>
            <Icon src={LikeIcon} />
            Curtir
          </ActionButton>
          <ActionButton>
            <Icon src={CommentIcon} />
            Comentar
          </ActionButton>
          <ActionButton>
            <Icon src={ShareIcon} />
            Compartilhar
          </ActionButton>
        </Container>
        <Container>
          <CommentEditor userAvatar={userAvatar} />
        </Container>
      </Fragment>
    );
  }
}

export default PostHeader;
