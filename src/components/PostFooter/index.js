import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, ActionButton, Icon } from './styles';
import Reactions from '../Reactions';
import CommentEditor from '../CommentEditor';

import LikeIcon from '../../assets/images/icons/like.png';
import CommentIcon from '../../assets/images/icons/comment.png';
import ShareIcon from '../../assets/images/icons/share.png';

class PostFooter extends Component {
  static propTypes = {
    userAvatar: PropTypes.shape().isRequired,
    numberOfLikes: PropTypes.number.isRequired,
  };

  state = {};

  render() {
    const { userAvatar, numberOfLikes } = this.props;
    return (
      <Fragment>
        {numberOfLikes > 0 && <Reactions numberOfLikes={numberOfLikes} />}
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

export default PostFooter;
