import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, Name, Time,
} from './styles';
import Avatar3 from '../../assets/images/avatars/03.png';

const PostHeader = props => (
  <Container>
    <Avatar src={Avatar3} alt="" />
    <div>
      <Name>
        {props.user}
      </Name>
      <Time>
        {props.createdAt}
      </Time>
    </div>
  </Container>
);

PostHeader.propTypes = {
  user: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};

export default PostHeader;
