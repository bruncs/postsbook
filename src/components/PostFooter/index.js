import React, { Fragment } from 'react';

import { Container, ActionButton, Icon } from './styles';
import CommentEditor from '../CommentEditor';

import LikeIcon from '../../assets/images/icons/like.png';
import CommentIcon from '../../assets/images/icons/comment.png';
import ShareIcon from '../../assets/images/icons/share.png';

const PostHeader = () => (
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
      <CommentEditor />
    </Container>
  </Fragment>
);

export default PostHeader;
