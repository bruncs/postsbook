import React from 'react';

import { Container, LikeButton, Icon } from './styles';
import LikeIcon from '../../assets/images/icons/like.png';

const PostHeader = () => (
  <Container>
    <LikeButton>
      <Icon src={LikeIcon} />
      Like
    </LikeButton>
  </Container>
);

export default PostHeader;
