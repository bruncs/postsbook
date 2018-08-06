import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';
import FriendRequest from '../FriendRequest';
import { Container } from './styles';

class FriendRequestList extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    friendship: PropTypes.shape().isRequired,
    listReqsRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    visible: false,
  };

  state = {};

  componentDidMount() {
    const { listReqsRequest } = this.props;
    listReqsRequest();
  }

  render() {
    const { visible, friendship } = this.props;
    return (
      <Container visible={visible}>
        {friendship.data.map(i => <FriendRequest key={i._id} name={i.name} />)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  friendship: state.friendship,
});

const mapDispatchToProps = dispatch => bindActionCreators(FriendshipCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendRequestList);
