import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, Name, Time,
} from './styles';
import Avatar3 from '../../assets/images/avatars/03.png';

const PostHeader = (props) => {
  const { user, createdAt, altCreatedAt } = props;
  return (
    <Container>
      <Avatar src={Avatar3} alt="" />
      <div>
        <Name>
          {user}
        </Name>
        <Time title={altCreatedAt}>
          {createdAt}
        </Time>
      </div>
    </Container>
  );
};

PostHeader.propTypes = {
  user: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  altCreatedAt: PropTypes.string.isRequired,
};

export default PostHeader;
