import React, { Fragment } from 'react';

import { Container, LikeButton, Icon } from './styles';
import CommentEditor from '../CommentEditor';
import LikeIcon from '../../assets/images/icons/like.png';

const PostHeader = () => (
  <Fragment>
    <Container>
      <LikeButton>
        <Icon src={LikeIcon} />
        Like
      </LikeButton>
    </Container>
    <Container>
      <CommentEditor />
    </Container>
  </Fragment>
);

export default PostHeader;
