import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from '../Avatar';
import {
  Container,
  Grid,
  GridColumn,
  Text,
  Name,
  Time,
  OptionsButton,
  Options,
  Item,
} from './styles';
import IconSet from '../../assets/images/icons/iconset5.png';

import { Creators as PostCreators } from '../../store/ducks/post';

class PostHeader extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.shape().isRequired,
    createdAt: PropTypes.string.isRequired,
    altCreatedAt: PropTypes.string.isRequired,
    removeRequest: PropTypes.func.isRequired,
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

  handleRemovePost = () => {
    const { removeRequest, postId } = this.props;
    removeRequest(postId);
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
          <GridColumn justifyContent="flex-start" alignItems="flex-end" flexDirection="column">
            <OptionsButton backgroundImage={`url(${IconSet})`} onClick={this.handleOptionsClick} />
            <Options visible={optionsVisible}>
              <Item onClick={this.handleRemovePost}>Excluir publicação</Item>
            </Options>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostHeader);
