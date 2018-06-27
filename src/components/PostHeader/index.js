import React from 'react';

import {
  Container, Avatar, Username, Time,
} from './styles';
import Avatar1 from '../../assets/images/avatars/01.png';

const PostHeader = () => (
  <Container>
    <Avatar src={Avatar1} alt="" />
    <div>
      <Username>
Bruno Correia
      </Username>
      <Time>
2 min ago
      </Time>
    </div>
  </Container>
);

export default PostHeader;
