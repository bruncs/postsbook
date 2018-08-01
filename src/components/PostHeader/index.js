import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container, Avatar, Name, Time,
} from './styles';
import Avatar3 from '../../assets/images/avatars/03.png';

const PostHeader = (props) => {
  const {
    userId, userName, createdAt, altCreatedAt,
  } = props;
  return (
    <Container>
      <Link to={`./profile?id=${userId}`}>
        <Avatar src={Avatar3} alt="" />
      </Link>
      <div>
        <Link to={`./profile?id=${userId}`} style={{ textDecoration: 'none' }}>
          <Name>
            {userName}
          </Name>
        </Link>
        <Time title={altCreatedAt}>
          {createdAt}
        </Time>
      </div>
    </Container>
  );
};

PostHeader.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  altCreatedAt: PropTypes.string.isRequired,
};

export default PostHeader;
