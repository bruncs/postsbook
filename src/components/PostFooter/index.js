import React, { Component, Fragment } from 'react';

import { Container, ActionButton, Icon } from './styles';
import CommentEditor from '../CommentEditor';

import LikeIcon from '../../assets/images/icons/like.png';
import CommentIcon from '../../assets/images/icons/comment.png';
import ShareIcon from '../../assets/images/icons/share.png';

class PostHeader extends Component {
  state = {};

  render() {
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
          <CommentEditor id="comment-editor" />
        </Container>
      </Fragment>
    );
  }
}

export default PostHeader;