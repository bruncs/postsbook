import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import {
  Container, Grid, GridColumn, Text, Name, Time, OptionsButton, Options,
} from './styles';
import IconSet from '../../assets/images/icons/iconset5.png';

class PostHeader extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.shape().isRequired,
    createdAt: PropTypes.string.isRequired,
    altCreatedAt: PropTypes.string.isRequired,
  };

  state = {
    optionsVisible: false,
  };

  handleOptionsClick = () => {
    const { optionsVisible } = this.state;
    this.setState(() => ({
      optionsVisible: !optionsVisible,
    }));
  };

  render() {
    const {
      userId, userName, userAvatar, createdAt, altCreatedAt,
    } = this.props;
    const { optionsVisible } = this.state;
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
          <GridColumn justifyContent="flex-end" flexDirection="row-reverse">
            <OptionsButton backgroundImage={`url(${IconSet})`} onClick={this.handleOptionsClick} />
            <Options visible={optionsVisible} />
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}

export default PostHeader;
