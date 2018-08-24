import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import {
  Container, Grid, GridColumn, Text, Name, Time, OptionsButton,
} from './styles';
import IconSet from '../../assets/images/icons/iconset5.png';

const PostHeader = (props) => {
  const {
    userId, userName, userAvatar, createdAt, altCreatedAt,
  } = props;
  return (
    <Container>
      <Grid>
        <GridColumn justifyContent="flex-start" alignItems="center">
          <Link to={`./profile?id=${userId}`}>
            <Avatar userId={userId} image={userAvatar} />
          </Link>
          <Text>
            <Link to={`./profile?id=${userId}`} style={{ textDecoration: 'none' }}>
              <Name>{userName}</Name>
            </Link>
            <Time title={altCreatedAt}>{createdAt}</Time>
          </Text>
        </GridColumn>
        <GridColumn justifyContent="flex-end">
          <OptionsButton backgroundImage={`url(${IconSet})`} />
        </GridColumn>
      </Grid>
    </Container>
  );
};

PostHeader.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.shape().isRequired,
  createdAt: PropTypes.string.isRequired,
  altCreatedAt: PropTypes.string.isRequired,
};

export default PostHeader;
