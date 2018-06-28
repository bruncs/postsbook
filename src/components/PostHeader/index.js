import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, Name, Time,
} from './styles';
import Avatar1 from '../../assets/images/avatars/01.png';

const PostHeader = props => (
  <Container>
    <Avatar src={Avatar1} alt="" />
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
