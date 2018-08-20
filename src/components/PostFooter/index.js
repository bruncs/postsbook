import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LikeCreators } from '../../store/ducks/like';

import { Container, ActionButton, Icon } from './styles';
import Reactions from '../Reactions';
import CommentEditor from '../CommentEditor';

import LikeIcon from '../../assets/images/icons/like.png';
import CommentIcon from '../../assets/images/icons/comment.png';
import ShareIcon from '../../assets/images/icons/share.png';

class PostFooter extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    userAvatar: PropTypes.shape().isRequired,
    numberOfLikes: PropTypes.number.isRequired,
    likeRequest: PropTypes.func.isRequired,
  };

  state = {};

  handleLike = () => {
    const { likeRequest, postId } = this.props;
    likeRequest(postId);
  };

  render() {
    const { userAvatar, numberOfLikes } = this.props;
    return (
      <Fragment>
        {numberOfLikes > 0 && <Reactions numberOfLikes={numberOfLikes} />}
        <Container>
          <ActionButton onClick={this.handleLike}>
            <Icon src={LikeIcon} />
            Curtir
          </ActionButton>
          <ActionButton>
            <Icon src={CommentIcon} />
            Comentar
          </ActionButton>
          <ActionButton>
            <Icon src={ShareIcon} />
            Compartilhar
          </ActionButton>
        </Container>
        <Container>
          <CommentEditor userAvatar={userAvatar} />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  like: state.like,
});

const mapDispatchToProps = dispatch => bindActionCreators(LikeCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostFooter);
