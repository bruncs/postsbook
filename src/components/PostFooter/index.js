import React from 'react';

import { Container, LikeButton, Icon } from './styles';
import LikeIcon from '../../assets/images/icons/like.png';

const PostHeader = () => (
  <Container>
    <div>
      <LikeButton>
        <Icon src={LikeIcon} />
        Curtir
      </LikeButton>
    </div>
  </Container>
);

export default PostHeader;
